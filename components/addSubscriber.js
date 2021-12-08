const { Client } = require("pg");

const queries = require("./queries");

async function addSubscriber({ email }) {
  const client = new Client({
    connectionString: process.env.DB,
    ssl: { rejectUnauthorized: false },
  });
  await client.connect();
  await client.query(queries.addSubscriber, [email]);
  return;
}

module.exports = addSubscriber;
