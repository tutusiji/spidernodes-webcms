const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const crawler = require("./crawler");

const app = express();
app.use(cors());
app.use(express.json());

// 连接到SQLite数据库
const db = new sqlite3.Database(
  path.join(__dirname, "weibo_crawler.db"),
  (err) => {
    if (err) {
      console.error("Error opening database", err);
    } else {
      console.log("Connected to the SQLite database.");
      db.run(`CREATE TABLE IF NOT EXISTS users (
      username TEXT PRIMARY KEY,
      location TEXT,
      followers INTEGER,
      posts INTEGER,
      lastActive TEXT
    )`);
    }
  }
);

app.get("/api/users", async (req, res) => {
  const { minFollowers, daysActive, minPosts } = req.query;
  try {
    const users = await crawler.filterUsers(
      db,
      minFollowers,
      daysActive,
      minPosts
    );
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/api/crawl", async (req, res) => {
  const { keyword } = req.body;
  try {
    await crawler.crawl(db, keyword);
    res.json({ message: "Crawling completed" });
  } catch (error) {
    console.error("Error during crawling:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
