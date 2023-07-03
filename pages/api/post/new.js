import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  const db = (await connectDB).db("bookish");
  let result = await db.collection("member").find().toArray();

  if (req.method == "POST") {
    const db = (await connectDB).db("bookish");
    let result = await db.collection("member").find({ id: "asdf" });
    console.log("result는", result);
    return res.status(200);
  }
}
