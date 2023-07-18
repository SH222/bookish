import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  console.log("req.body", req.body.email);
  // try {
  if (req.method === "POST") {
    const db = (await connectDB).db("bookish");
    const searchEmail = await db.collection("members").findOne({ email: req.body.email });

    if (searchEmail) {
      res.status(200).json({ isDuplicate: true });
    } else {
      res.status(200).json({ isDuplicate: false });
    }
    res.status(200);
  }
}
