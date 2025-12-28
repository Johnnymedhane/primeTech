import { NavLink } from "react-router-dom"
import style from "./AppNav.module.css"

function NavLinks({place, children, className, onClick}) {



  return (
  <nav  className={`${style.nav} ${style[place + "Nav"]} ${style[className] || ""}`} onClick={onClick}> 

      <ul >
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/aboutUs">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/courses">Courses</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
     
      {children}
      </ul>
    </nav>
  )
}

export default NavLinks
