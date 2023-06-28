import { connectDB } from "@/util/database"; // @/ 사이트 루트 경로부터 시작
import BookList from "./bookList/page";
import MainNav from "./mainNav/page";

export default async function Home() {
  const db = (await connectDB).db("bookish");
  let result = await db.collection("items").find().toArray();
  console.log(result);

  return (
    <div className="container">
      <MainNav />
      <BookList result={result} />
    </div>
  );
}
