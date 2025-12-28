import style from "./Button.module.css"

function Button({className, children, onClick}) {
  return (
    <button className={`${style.normal} ${style[className] || ''}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
