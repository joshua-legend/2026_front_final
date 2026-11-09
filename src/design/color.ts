type state = "default" | "active" | "error";

type A = { [K: state]: string };

export const borderClass = {
  default: "border-[#E9E9E9]",
  active: "border-[#1AD4C5]",
  error: "border-[#FF595E]",
} as const;
