"use client";

import { useEffect, useState } from "react";

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

export default function Register() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    console.log(event.target.value);
    const newEmail = event.target.value;
    setEmail(newEmail);
    console.log("email:", email);
  };

  useEffect(() => {
    console.log("email:", email);
  }, [email]);

  const handleSubmit = (event) => {
    // event.preventDefault();
    if (!validateEmail(email)) {
      alert("이메일 형식이 틀렸습니다.");
    }
  };

  return (
    <div className="container">
      <form method="POST" action="/api/auth/signup" onSubmit={handleSubmit}>
        <input name="nickname" type="text" placeholder="닉네임" />
        <br />
        <input
          name="email"
          type="text"
          placeholder="이메일"
          value={email}
          onChange={handleEmailChange}
        />
        <br />
        <input name="password" type="password" placeholder="비밀번호" />
        <br />
        <button type="submit">가입</button>
      </form>
    </div>
  );
}
