import './Button.css';

const Button = (props) => {
  return (
    <button
      type='button'
      className={`button btn-hover ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
