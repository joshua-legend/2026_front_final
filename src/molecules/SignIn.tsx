"use client";
import { ChangeEvent, useState } from "react";
import Button from "../atoms/Buttons/Button";
import Underline from "../atoms/Inputs/Underline";
import Label from "../atoms/Typographys/Label";
import { validation } from "../utils/validation";

export type TSignInField = "email" | "password";
export type TSignIn = Record<TSignInField, string>;

const SignIn = () => {
  const [values, setValues] = useState<TSignIn>({
    email: "",
    password: "",
  });

  const isValid: Record<TSignInField, boolean> = {
    email: validation.email.test(values.email),
    password: validation.password.test(values.password),
  };

  const getValue = (
    e: ChangeEvent<HTMLInputElement, HTMLInputElement>,
    name: keyof TSignIn,
  ) => {
    setValues((prev) => {
      return {
        ...prev,
        [name]: e.target.value,
      };
    });
  };

  return (
    <article className="flex flex-col gap-4">
      <Underline func={getValue} placeholder="Email" name="email" />
      {!isValid.email && (
        <Label text="이메일 형식에 맞지 않습니다." type="secondary" />
      )}
      <Underline
        type="text"
        func={getValue}
        placeholder="Password"
        name="password"
      />
      {!isValid.password && (
        <Label
          text="영문 숫자 조합 8자리 이상 입력하여야 합니다."
          type="secondary"
        />
      )}
      <Button
        text="Sign in"
        type={isValid.email && isValid.password ? "primary" : "secondary"}
      />
    </article>
  );
};

export default SignIn;
