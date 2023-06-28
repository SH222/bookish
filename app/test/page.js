"use client";
import { nameState } from "@/store/states";
import Link from "next/link";
import { useRecoilState } from "recoil";

export default function Test() {
  const [name, setNameState] = useRecoilState(nameState);
  const updateName = (e) => {
    setNameState(e.target.value);
  };
  return (
    <div>
      <h1>test</h1>
      <input
        type="text"
        name="name"
        id="input_name"
        onChange={updateName}
        placeholder="Enter your name"
      />
      <Link href="/">Home</Link>
    </div>
  );
}
