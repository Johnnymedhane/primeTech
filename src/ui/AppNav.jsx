import { NavLink } from "react-router-dom";
import style from "./AppNav.module.css";
import useOutsideClick from "../hooks/useOutsideClick";


function NavLinks({ place, children, className, onClick, menu }) {
  const ref = useOutsideClick(menu)

  // useEffect(() => {
  //   if (className !== "navOpen") return;

  //   function handleClick(event) {
  //     if (ref.current && !ref.current.contains(event.target)) {
  //       console.log("Clicked outside nav");
  //       menu(false);
  //     }
  //   }

  //   document.addEventListener("click", handleClick, true);
  //   return () => {
  //     document.removeEventListener("click", handleClick, true);
  //   };
  // }, [menu, className]);

  return (
    <nav
      className={`${style.nav} ${style[place + "Nav"]} ${
        style[className] || ""
      }`}
      onClick={onClick}
      ref={ref}
    >
      <ul>
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
  );
}

export default NavLinks;
