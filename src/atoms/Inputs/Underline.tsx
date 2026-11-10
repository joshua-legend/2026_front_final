"use client";
import { borderClass } from "@/src/design/color";
import { TSignIn } from "@/src/molecules/SignIn";
import { ChangeEvent, HTMLInputTypeAttribute, useState } from "react";

type UnderlineProps = {
  placeholder?: string;
  state?: "default" | "active" | "error";
  func: (
    e: ChangeEvent<HTMLInputElement, HTMLInputElement>,
    name: keyof TSignIn,
  ) => void;
  type?: HTMLInputTypeAttribute;
  name: keyof TSignIn;
};

const Underline = ({
  placeholder,
  state = "active",
  func,
  type = "text",
  name,
}: UnderlineProps) => {
  return (
    <div className={`p-2 border-b ${borderClass[state]}`}>
      <input
        onChange={(e) => func(e, name)}
        className="w-full focus:outline-none"
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};

export default Underline;
