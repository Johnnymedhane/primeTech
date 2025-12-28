import { IoChatbubbles } from "react-icons/io5"
import NavLinks from "./AppNav"
import styles from './Footer.module.css'
import { useState } from "react";
import { PHONE_NUMBER } from "../constant";
import { HiPhone } from "react-icons/hi";


function Footer() {
  const [windowWidth] = useState(window.innerWidth);

  return (
    <footer className={styles.footer}>
   { windowWidth > 600 ? <NavLinks place="footer" className="footerNav">
        <li>
       <IoChatbubbles  />
       <span> Eth</span>
         </li>
     </NavLinks> :
     <div className={styles.mobileFooter}>
    
   
     <div >
          <HiPhone />
      <a href={`tel:${PHONE_NUMBER}`} >
        Contact Us</a>
     </div>
     <div >
      <IoChatbubbles  /> 
      <span>Eth</span>
     </div>
     </div>
     }
    
    </footer>
  )
}

export default Footer
