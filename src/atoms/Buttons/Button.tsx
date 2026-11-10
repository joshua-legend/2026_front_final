import { buttonType } from "@/src/design/color";

type ButtonProps = {
  text?: string;
  type?: "primary" | "secondary" | "netural";
};

const Button = ({ text = "default", type = "primary" }: ButtonProps) => {
  return (
    <button className={`${buttonType[type]} py-3 px-6 rounded-xl text-white`}>
      {text}
    </button>
  );
};

export default Button;
