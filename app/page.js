import Image from "next/image";
import Logo from "../public/logo.png";
import { connectDB } from "@/util/database"; // @/ 사이트 루트 경로부터 시작
import BookList from "./bookList/page";

export default async function Home() {
  const db = (await connectDB).db("bookish");
  let result = await db.collection("items").find().toArray();
  console.log(result);

  return (
    <div className="container">
      <header>
        <Image src={Logo} alt="Bookish" width={200} />
        <button className="profile-btn">
          <span>이름</span>
        </button>
      </header>
      <BookList result={result} />
    </div>
  );
}
