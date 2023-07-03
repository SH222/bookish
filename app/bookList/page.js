import Image from "next/image";
import style from "./bookList.module.css";
import BookImage from "./img/book1.jpg";
import closeBtn from "./img/close.png";
import Link from "next/link";

export default function BookList({ result }) {
  const bookItemList = result[1].bookItems;
  console.log(bookItemList);
  return (
    <div className="main-contents">
      {bookItemList.map((item, index) => (
        <div className={style.bookItem} key={item.index}>
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
            <button className={style.itemDelBtn}>
              <Image src={closeBtn} width={10} alt="close" />
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}
