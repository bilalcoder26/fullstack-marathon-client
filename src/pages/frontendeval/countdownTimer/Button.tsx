interface ButtonProps {
    onClick: () => void;
    text: string;
}
const Button = (props: ButtonProps) => {
  return (
    <div>
        <button
            onClick={props.onClick}
            className="bg-blue-500 text-white px-4 py-2 rounded-md m-2 cursor-pointer hover:bg-blue-600 transition-colors"
        >
            {props.text}
        </button>
    </div>
  )
}

export default Button