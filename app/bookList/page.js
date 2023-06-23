export default function BookList({ result }) {
  return (
    <div>
      <div className="bookItem">
        <span>제목</span>
        <span>{result[0].title}</span>
        <br />
        <span>별점</span>
        <span>{}</span>
        <br />
        <span>키워드</span>
        <span>{result[0].keyword}</span>
        <br />
        <span>날짜</span>
        <span>{}</span>
      </div>
    </div>
  );
}
