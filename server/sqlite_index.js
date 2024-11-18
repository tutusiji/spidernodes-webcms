const puppeteer = require("puppeteer");
const fs = require("fs");
const sqlite3 = require("sqlite3").verbose();
const express = require("express");
const cors = require("cors");

// 连接 SQLite 数据库
const db = new sqlite3.Database("./weibo_data.db", (err) => {
  if (err) {
    console.error("无法连接到数据库:", err);
  } else {
    console.log("成功连接到 SQLite 数据库");
  }
});

// 创建用户表
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      userName TEXT,
      location TEXT,
      followersCount INTEGER,
      postTime TEXT,
      keyword TEXT
    )
  `);
});

// 爬虫主函数
(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  const keyword = "新能源汽车";
  const searchUrl = `https://s.weibo.com/weibo?q=${encodeURIComponent(
    keyword
  )}`;
  await page.goto(searchUrl, { waitUntil: "networkidle2" });

  const usersData = await page.evaluate((keyword) => {
    let users = [];
    let cards = document.querySelectorAll(".card-wrap");

    cards.forEach((card) => {
      const userName = card.querySelector(".name")?.innerText;
      const location = card.querySelector(".from a")?.innerText;
      const followersCountText =
        card.querySelector(".info .followers")?.innerText;
      const followersCount = followersCountText
        ? parseInt(followersCountText.replace(/[^\d]/g, ""), 10)
        : 0;
      const postTimeText = card
        .querySelector(".from .time")
        ?.getAttribute("title");
      const postTime = postTimeText
        ? new Date(postTimeText).toISOString()
        : null;

      if (userName && location) {
        users.push({
          userName,
          location,
          followersCount,
          postTime,
          keyword,
        });
      }
    });
    return users;
  }, keyword);

  await browser.close();

  // 保存数据到 SQLite
  const stmt = db.prepare(
    "INSERT INTO users (userName, location, followersCount, postTime, keyword) VALUES (?, ?, ?, ?, ?)"
  );
  for (const userData of usersData) {
    stmt.run(
      userData.userName,
      userData.location,
      userData.followersCount,
      userData.postTime,
      userData.keyword
    );
  }
  stmt.finalize();

  console.log("数据保存完成。");
})();

// 设置 Express 服务器
const app = express();
app.use(cors());
app.use(express.json());

// 获取所有用户数据
app.get("/api/users", (req, res) => {
  db.all("SELECT * FROM users", [], (err, rows) => {
    if (err) {
      res.status(500).json({ message: err.message });
    } else {
      res.json(rows);
    }
  });
});

// 根据关键词搜索用户数据
app.get("/api/users/search", (req, res) => {
  const { keyword } = req.query;
  let query = "SELECT * FROM users WHERE keyword LIKE ?";
  const params = [`%${keyword}%`];

  db.all(query, params, (err, rows) => {
    if (err) {
      res.status(500).json({ message: err.message });
    } else {
      res.json(rows);
    }
  });
});

// 过滤用户数据
app.get("/api/users/filter", (req, res) => {
  const { minFollowers, maxFollowers, location, keyword } = req.query;
  let query = "SELECT * FROM users WHERE 1=1";
  const params = [];

  if (minFollowers) {
    query += " AND followersCount >= ?";
    params.push(parseInt(minFollowers));
  }
  if (maxFollowers) {
    query += " AND followersCount <= ?";
    params.push(parseInt(maxFollowers));
  }
  if (location) {
    query += " AND location LIKE ?";
    params.push(`%${location}%`);
  }
  if (keyword) {
    query += " AND keyword LIKE ?";
    params.push(`%${keyword}%`);
  }

  db.all(query, params, (err, rows) => {
    if (err) {
      res.status(500).json({ message: err.message });
    } else {
      res.json(rows);
    }
  });
});

// 启动服务器
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`服务器正在运行在端口 ${PORT}`);
});
