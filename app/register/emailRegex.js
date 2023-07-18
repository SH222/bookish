"use client";

import { useEffect, useState } from "react";

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

export default function EmailRegex() {
  const [email, setEmail] = useState(""); // 이메일 유효성검사
  const [regexMessage, setRegexMessage] = useState("이메일 형식을 지켜주세요");

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    console.log(newEmail);

    if (validateEmail(newEmail)) {
      setRegexMessage("올바른 이메일입니다.");
    } else {
      setRegexMessage("이메일 형식을 지켜주세요");
    }
  };

  return (
    <div>
      <input
        name="email"
        type="text"
        placeholder="이메일"
        value={email}
        onChange={handleEmailChange}
      />
      <span>{regexMessage}</span>
    </div>
  );
}
