import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import bcrypt from "bcrypt"; // 비밀번호 암호화 라이브러리

export default async function handler(req, res) {
  console.log(req.body);
  try {
    if (req.method === "POST") {
      const db = (await connectDB).db("bookish");
      let hash = await bcrypt.hash(req.body.password, 10); // 비밀번호 암호화
      req.body.password = hash;

      const memberDocument = {
        _id: new ObjectId(),
        grade: "user",
        bookItems: [],
        email: req.body.email,
        nickname: req.body.nickname,
        password: req.body.password,
        sentences: [],
        wish: [],
      };
      let result = await db.collection("members").insertOne(memberDocument);
      res.status(200).redirect(302, "/");
    }
  } catch (e) {
    res.status(500).json("가입실패");
  }
}
