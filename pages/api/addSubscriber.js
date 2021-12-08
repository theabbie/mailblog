import addSubscriber from "../../components/addSubscriber";

export default async function handler(req, res) {
  if (req.method == "POST") await addSubscriber({ email: JSON.parse(req.body).email });
  res.end();
}