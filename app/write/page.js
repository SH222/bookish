import style from "./write.module.css";

export default function write() {
  return (
    <div className={style.container}>
      <form action="/api/post/new" method="POST" className={style.form}>
        {/* <input name="titleImage" placeholder="이미지" className={style.titleImage} /> */}
        <br />
        <input name="title" placeholder="책 제목" className={style.title} />
        <br />
        <span className={style.dateSpan}>날짜</span>
        <input name="date" placeholder="(yyyy-mm-dd)" className={style.date} />
        <br />
        <span className={style.writerSpan}>저자</span>
        <input name="writer" placeholder="저자" className={style.writer} />
        <br />
        <span className={style.keywordSpan}>키워드</span>
        <input name="keyword" placeholder="키워드" className={style.keyword} />
        <br />
        <textarea
          cols="50"
          rows="10"
          name="contents"
          placeholder="내용입력"
          className={style.contents}
        />
        <div className={style.submitBtnDiv}>
          <button type="submit" className={style.submitBtn}>
            추가
          </button>
        </div>
      </form>
    </div>
  );
}
