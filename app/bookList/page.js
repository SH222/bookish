import Image from "next/image";
import style from "./bookList.module.css";
import BookImage from "./img/book1.jpg";
import Link from "next/link";

export default function BookList({ result }) {
  return (
    <div className="main-contents">
      {result.map((item) => (
        <div className={style.bookItem} key={item._id}>
          <Image src={BookImage} alt="item.title" className={style.bookImg} />
          <span className={style.bookTitle}>{item.title}</span>
          <br />
          <span className={style.bookWrite}>저자</span>
          <span className={style.bookWriteDetail}>{item.write}</span>
          <br />
          <span className={style.bookDate}>날짜</span>
          <br />
          <span className={style.bookKeyword}>키워드</span>
          <span className={style.bookKeywordDetail}>{item.keyword}</span>
          <span className={style.bookDateDetail}></span>
          <Link className={style.bookItemDelBtn} href="/">
            <button className={style.itemDelBtn}>❌</button>
          </Link>
        </div>
      ))}
    </div>
  );
}
