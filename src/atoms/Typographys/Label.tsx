import { labelType } from "@/src/design/color";

type labelProps = {
  text?: string;
  type?: "primary" | "secondary" | "netural";
};

const Label = ({ text = "default", type = "primary" }: labelProps) => {
  return <label className={`text-xs ${labelType[type]}`}>{text}</label>;
};

export default Label;
