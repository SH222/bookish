import Link from "next/link";
import style from "./mainNav.module.css";

export default function mainNav() {
  return (
    <div className={style.mainNavDiv}>
      <Link href="/write">+</Link>
      <button>정렬</button>
    </div>
  );
}
