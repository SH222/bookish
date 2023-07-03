import { connectDB } from "@/util/database"; // @/ 사이트 루트 경로부터 시작
import BookList from "./bookList/page";
import MainNav from "./mainNav/page";
import Sentence from "./sentence/page";
import "../public/fonts/style.css";

export default async function Home() {
  const db = (await connectDB).db("bookish");
  let result = await db.collection("member").find().toArray();

  return (
    <div className="container">
      <MainNav />
      <BookList result={result} />
      <Sentence />
    </div>
  );
}
