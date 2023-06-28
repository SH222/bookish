import style from "./mainNav.module.css";

export default function mainNav() {
  return (
    <div className={style.mainNavDiv}>
      <button>+</button>
      <button>정렬</button>
    </div>
  );
}
