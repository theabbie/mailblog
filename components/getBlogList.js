const { Client } = require("pg");

const queries = require("./queries");

async function getBlogList() {
  const client = new Client({
    connectionString: process.env.DB,
    ssl: { rejectUnauthorized: false },
  });
  await client.connect();
  let blogList = await client.query(queries.getBlogList);
  return blogList.rows;
}

module.exports = getBlogList;