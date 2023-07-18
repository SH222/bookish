import { connectDB } from "@/util/database"; // @/ 사이트 루트 경로부터 시작
import BookList from "./bookList/page";
import MainNav from "./mainNav/page";
import Sentence from "./sentence/page";
import LoginModal from "./loginModal/page";
import "../public/fonts/style.css";
import Link from "next/link";

export default async function Home() {
  const db = (await connectDB).db("bookish");
  let result = await db.collection("members").find().toArray();
  console.log(result);

  return (
    <div className="container">
      <MainNav />
      <BookList result={result} />
      <Sentence />
      {/* {!isLoggedIn && <LoginModal onLogin={handleLogin} />} */}
    </div>
  );
}
