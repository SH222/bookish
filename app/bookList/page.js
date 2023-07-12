"use client";

import Image from "next/image";
import style from "./bookList.module.css";
import BookImage from "./img/book1.jpg";
import closeBtn from "./img/close.png";
import Link from "next/link";

export default function BookList({ result }) {
  const bookItemList = result[0].bookItems;

  return (
    <div className="main-contents">
      {bookItemList.map((item, i) => (
        <div className={style.bookItem} key={item.book_id}>
          <Image src={BookImage} alt="item.title" className={style.bookImg} priority />
          <span className={style.bookTitle}>{item.title}</span>
          <br />
          <span className={style.bookWrite}>저자</span>
          <span className={style.bookWriteDetail}>{item.write}</span>
          <br />
          <span className={style.bookDate}>날짜</span>
          {/* <span className={style.bookDate}></span> */}
          <br />
          <span className={style.bookKeyword}>키워드</span>
          <span className={style.bookKeywordDetail}>{item.keyword}</span>
          <span className={style.bookDateDetail}></span>
          {/* <Link className={style.bookItemDelBtn} href="/"> */}
          <span
            className={style.itemDelBtn}
            onClick={(e) => {
              fetch("/api/change/" + item.book_id.toString())
                .then((r) => r.json())
                .then(() => {
                  e.target.parentElement.style.opacity = 0;
                  setTimeout(() => {
                    e.target.parentElement.style.display = "none";
                  }, 1000);
                });
            }}
          >
            <Image src={closeBtn} width={10} alt="delete" />
          </span>
          {/* </Link> */}
        </div>
      ))}
    </div>
  );
}
