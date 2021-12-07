import refresh from "../../components/refresh";

export default async function handler(req, res) {
  await refresh();
  res.end();
}
