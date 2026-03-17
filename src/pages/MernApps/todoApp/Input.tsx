interface InputProps {
  type: string;
  placeholder: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className: string;
  name:string;
}
const Input = (props: InputProps) => {
  return (
    <div>
      <input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        name={props.name}  
        className={`border-2 border-gray-300 rounded-md p-2 w-24 m-2 ${props.className || ""}`}
      />
    </div>
  );
};

export default Input;

/*
this is better approachs
type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ className, ...rest }: InputProps) => {
  return (
    <input
      className={`border-2 border-gray-300 rounded-md p-2 m-2 ${className}`}
      {...rest}
    />
  );
};
*/