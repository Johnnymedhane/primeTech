// import Button from "./Button"
import Button from "./Button"
import Logo from "./Logo"
import NavLinks from "./AppNav"
import styles from './Header.module.css'
import { Link } from "react-router-dom"
import { useState } from "react"
// import style from "./AppNav"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }
  function closeMenu() {
    setIsMenuOpen(false);
  }

 
  return (
    <header className={styles.header}>
      <Logo />
      <button className={`${styles.menuButton} ${isMenuOpen ? styles.open : ''}`} aria-label="Menu"
      onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <NavLinks place="header" className={`${isMenuOpen ? "navOpen" : ''}`} onClick={toggleMenu}
      menu={closeMenu}>
         <Button>
          <Link to="/courses">Get Started</Link></Button>
      </NavLinks>
     
    </header>
  )
}

export default Header
