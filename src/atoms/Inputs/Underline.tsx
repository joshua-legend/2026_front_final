import { borderClass } from "@/src/design/color";

type UnderlineProps = {
  placeholder?: string;
  state?: "default" | "active" | "error";
};

const Underline = ({ placeholder, state = "active" }: UnderlineProps) => {
  return (
    <div className={`p-2 border-b ${borderClass[state]}`}>
      <input
        className="focus:outline-none"
        placeholder={placeholder}
        type="text"
      />
    </div>
  );
};

export default Underline;
