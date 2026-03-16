interface ButtonProp{
    type:string;
    onClick:() => void;
    label:string;
    className:string;
}

const Button = (Props:ButtonProp) => {
  return (
    <div>
        <button
            onClick={Props.onClick}
            className={`bg-blue-500 text-white px-4 py-2 rounded-md m-2 cursor-pointer hover:bg-blue-600 transition-colors${Props.className || ""}`}
        >
            {Props.label}
        </button>

    </div>
  )
}

export default Button