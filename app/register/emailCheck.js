"use client";

export default async function EmailCheck() {
  return (
    <div>
      <button formAction="/api/auth/check">중복확인</button>
    </div>
  );
}
