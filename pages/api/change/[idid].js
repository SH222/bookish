import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  console.log(req.query.idid);
  const db = (await connectDB).db("bookish");
  let result = await db.collection("members");
  result.updateMany({}, { $pull: { bookItems: { book_id: new ObjectId(req.query.idid) } } });
  return res.status(200).json("삭제성공");
}
