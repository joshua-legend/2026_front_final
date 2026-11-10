"use client";
import { borderClass } from "@/src/design/color";
import { ChangeEvent, HTMLInputTypeAttribute, useState } from "react";

type UnderlineProps = {
  placeholder?: string;
  state?: "default" | "active" | "error";
  func: (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => void;
  type?: HTMLInputTypeAttribute;
};

const Underline = ({
  placeholder,
  state = "active",
  func,
  type = "text",
}: UnderlineProps) => {
  return (
    <div className={`p-2 border-b ${borderClass[state]}`}>
      <input
        onChange={func}
        className="w-full focus:outline-none"
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};

export default Underline;
