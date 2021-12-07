const imap = require("imap-simple");
const simpleParser = require("mailparser").simpleParser;
const { Client } = require("pg");

const queries = require("./queries");

async function refresh() {
  const client = new Client({
    connectionString: process.env.DB,
    ssl: { rejectUnauthorized: false },
  });
  await client.connect();
  const connection = await imap.connect({
    imap: {
      user: process.env.EMAIL,
      password: process.env.PASSWORD,
      host: "imap.gmail.com",
      port: 993,
      tls: true,
      tlsOptions: { rejectUnauthorized: false },
    },
  });
  await connection.openBox("INBOX");
  const rawMessages = await connection.search(["UNSEEN"], {
    bodies: ["HEADER", "TEXT", ""],
    markSeen: true,
  });
  for (let msg of rawMessages) {
    let all = msg.parts.filter((part) => part.which == "");
    let id = msg.attributes.uid;
    let idHeader = "Imap-Id: " + id + "\r\n";
    await new Promise((resolve, reject) => {
      simpleParser(idHeader + all[0].body, async (err, mail) => {
        const { subject, html, date, from } = mail;
        console.log(subject);
        const author_id = from.text.match(/\<(.*?)\>/)[1];
        const author_name = from.text.split("<")[0].trim();
        await client.query(queries.addAuthor, [author_id, author_name]);
        await client.query(queries.addBlog, [subject, html, date, author_id]);
        resolve();
      });
    });
  }
  return;
}

module.exports = refresh;
