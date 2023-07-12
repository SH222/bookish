import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const db = (await connectDB).db("bookish");
      const members = await db.collection("members");
      const newDocument = {
        book_id: new ObjectId(),
        date: new Date(req.body.date),
        image: req.body.image,
        title: req.body.title,
        write: req.body.write,
        keyword: req.body.keyword,
        contents: req.body.contents,
      };
      await members.updateOne({ id: "admin" }, { $push: { bookItems: newDocument } });
      return res.status(200).send("success");
    }
  } catch (e) {
    res.status(500).send("fail");
  }
}
