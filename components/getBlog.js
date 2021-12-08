const { Client } = require("pg");

const queries = require("./queries");

async function getBlog({ blog_id }) {
  const client = new Client({
    connectionString: process.env.DB,
    ssl: { rejectUnauthorized: false },
  });
  await client.connect();
  let blog = await client.query(queries.getBlog, [blog_id]);
  return blog.rows;
}

module.exports = getBlog;