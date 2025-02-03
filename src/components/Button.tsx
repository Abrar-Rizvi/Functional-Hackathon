
interface ButtonI {
  content: string;
  classname: string;
  onClick?: () => void
}
const Button = ({content, classname, onClick}: ButtonI) => {
  return (
    <button className={`${classname}`} onClick={onClick} >{content}</button>
  )
}

export default Button