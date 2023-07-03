export default function write() {
  return (
    <div className="container">
      <h4>새 글 작성</h4>
      <form action="/api/post/new" method="POST">
        <input name="title" placeholder="제목 입력" />
        <br />
        <input name="date" placeholder="날짜" />
        <br />
        <input name="writer" placeholder="저자" />
        <br />
        <input name="keyword" placeholder="키워드" />
        <br />
        <input name="contents" placeholder="내용입력" />
        <br />
        <button type="submit">등록</button>
      </form>
    </div>
  );
}
