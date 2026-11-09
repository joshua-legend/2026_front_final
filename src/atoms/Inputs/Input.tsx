import { borderClass } from "@/src/design/color";

type InputProps = {
  placeholder?: "Default" | "Search";
  state?: "default" | "active" | "error";
};

const Input = ({ state = "default", placeholder = "Default" }: InputProps) => {
  return (
    <div className={`p-2 border ${borderClass[state]} rounded-sm`}>
      <input className="focus:outline-none" placeholder={placeholder} />
    </div>
  );
};

export default Input;
