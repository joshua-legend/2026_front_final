"use client";
import { ChangeEvent, useState } from "react";
import Button from "../atoms/Buttons/Button";
import Underline from "../atoms/Inputs/Underline";
import Label from "../atoms/Typographys/Label";

const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const getEmail = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    setEmail((prev) => e.target.value);
  };

  const getPassword = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    setPassword((prev) => e.target.value);
  };

  const emailValidation = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const passwordValidation = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

  return (
    <article className="flex flex-col gap-4">
      <Underline func={getEmail} placeholder="Email" />
      {!emailValidation.test(email) && (
        <Label text="이메일 형식에 맞지 않습니다." type="secondary" />
      )}
      <Underline type="password" func={getPassword} placeholder="Password" />
      {!passwordValidation.test(password) && (
        <Label
          text="영문 숫자 조합 8자리 이상 입력하여야 합니다."
          type="secondary"
        />
      )}
      <Button text="Sign in" />
    </article>
  );
};

export default SignIn;
