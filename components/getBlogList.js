const { Client } = require("pg");

const queries = require("./queries");
const refresh = require("./refresh");

async function getBlogList() {
  await refresh();
  const client = new Client({
    connectionString: process.env.DB,
    ssl: { rejectUnauthorized: false },
  });
  await client.connect();
  let blogList = await client.query(queries.getBlogList);
  return blogList.rows;
}

module.exports = getBlogList;