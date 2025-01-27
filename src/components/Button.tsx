
interface ButtonI {
  content: string;
  classname: string;
  onClick?: () => void
}
const Button = ({content, classname, onClick}: ButtonI) => {
  return (
    <div className={`${classname}`} onClick={onClick} >{content}</div>
  )
}

export default Button