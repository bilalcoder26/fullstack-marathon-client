interface InputProps {
    type: string;
    placeholder: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input = (props: InputProps) => {
  return (
    <div>
        <input
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
            className="border-2 border-gray-300 rounded-md p-2 w-24 m-2"
        />
    </div>
  )
}

export default Input