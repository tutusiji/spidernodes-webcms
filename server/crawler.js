const axios = require("axios");

async function crawl(db, keyword) {
  try {
    const response = await axios.get(
      `https://weibo.com/ajax/side/search?q=${encodeURIComponent(keyword)}`
    );
    const users = response.data.users;

    const stmt =
      db.prepare(`INSERT OR REPLACE INTO users (username, location, followers, posts, lastActive)
                             VALUES (?, ?, ?, ?, ?)`);

    for (let user of users) {
      stmt.run(
        user.username,
        user.location,
        user.followers,
        user.posts,
        user.lastActive
      );
    }

    stmt.finalize();
    console.log(`Crawling completed for keyword: ${keyword}`);
  } catch (error) {
    console.error(`Error crawling for keyword ${keyword}:`, error);
    throw error;
  }
}

function filterUsers(db, minFollowers, daysActive, minPosts) {
  return new Promise((resolve, reject) => {
    const date = new Date();
    date.setDate(date.getDate() - daysActive);

    const query = `
      SELECT * FROM users
      WHERE followers >= ?
        AND lastActive >= ?
        AND posts >= ?
    `;

    db.all(query, [minFollowers, date.toISOString(), minPosts], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

module.exports = { crawl, filterUsers };
