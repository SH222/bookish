import style from "./sentence.module.css";

export default function sentence() {
  return (
    <div className={style.sentenceDiv}>
      <span className={style.sentenceItem}>
        굳이 특별해지기 위해 애쓰지 않는 순간 삶은 조금씩 내 것이 된다.
      </span>
      <span className={style.sentanceBookTitle}>책1</span>
    </div>
  );
}
