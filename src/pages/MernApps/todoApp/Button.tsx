interface ButtonProp {
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;
  className?: string;
  disabled?: boolean;
}

const Button = ({
  type = "button",
  onClick,
  label,
  className = "",
  disabled = false,
}: ButtonProp) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-md m-2 transition-colors 
        ${
          disabled
            ? "bg-gray-400 text-gray-700 cursor-not-allowed opacity-60"
            : "bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"
        } 
        ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;