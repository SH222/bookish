import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  if (req.method == "POST") {
    const db = (await connectDB).db("bookish");
    let members = await db.collection("members");
    members.updateOne({ id: "asdf" }, { $push: { bookItems: req.body } });
    return res.status(200);
  }
}
