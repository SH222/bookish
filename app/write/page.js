import style from "./write.module.css";

export default function write() {
  return (
    <div className={style.con}>
      <p className={style.catecoryTitle}>새 글 작성</p>
      <form action="/api/post/new" method="POST">
        <input name="bookId" className={style.bookId} />

        <input name="titleImage" placeholder="이미지" className={style.titleImage} />
        <br />
        <input name="title" placeholder="제목" className={style.title} />
        <br />
        <span>날짜</span>
        <input name="date" placeholder="(yyyy-mm-dd)" className={style.date} />
        <br />
        <span>저자</span>
        <input name="writer" placeholder="저자" className={style.writer} />
        <br />
        <span>키워드</span>
        <input name="keyword" placeholder="키워드" className={style.keyword} />
        <br />
        <textarea
          cols="50"
          rows="10"
          name="contents"
          placeholder="내용입력"
          className={style.contents}
        />
        <br />
        <button type="submit" className={style.submitBtn}>
          등록
        </button>
      </form>
    </div>
  );
}
