"use client";

import { useState } from "react";
import style from "./register.module.css";

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

export default function Register() {
  const [email, setEmail] = useState(""); // 이메일 유효성검사
  const [regexMessage, setRegexMessage] = useState("이메일 형식을 지켜주세요");
  const [isDuplicate, setIsDuplicate] = useState(false); // 이메일 중복 검사

  // 이메일 형식 확인(정규식)
  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    if (validateEmail(newEmail)) {
      setRegexMessage("올바른 이메일 형식입니다.");
    } else {
      setRegexMessage("이메일 형식을 지켜주세요");
    }
  };

  // 이메일 중복 검사
  const handleEmailCheck = async () => {
    const response = await fetch("/api/auth/check", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      const data = await response.json();
      setIsDuplicate(data.isDuplicate);
      if (data.isDuplicate) {
        alert("이미 사용 중인 이메일입니다.");
      } else {
        alert("사용 가능한 이메일입니다.");
      }
    } else {
      console.error("이메일 중복 확인에 실패하였습니다.");
    }
  };

  const handleRegister = (event) => {
    event.preventDefault();
    // 폼 제출 전 유효성 검사, 이메일 중복 확인 후 서버에 폼을 제출하는 코드를 추가 예정
  };

  return (
    <div className={style.container}>
      <p className={style.signupTitle}>Sign up</p>
      <form method="POST" action="/api/auth/signup" onSubmit={handleRegister}>
        <input name="nickname" type="text" placeholder="Nickname" className={style.nicknameInput} />
        <br />
        <input
          name="email"
          type="text"
          placeholder="Email (oooo@oooo.ooo)"
          value={email}
          onChange={handleEmailChange}
          className={style.emailInput}
        />
        <br />
        <span className={style.emailSpan}>{regexMessage}</span>
        <br />
        <button
          formAction="/api/auth/check"
          onClick={handleEmailCheck}
          className={style.duplicateBtn}
        >
          중복확인
        </button>
        <br />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className={style.passwordInput}
        />
        <br />
        <button type="submit" className={style.submitBtn}>
          가입
        </button>
      </form>
    </div>
  );
}
