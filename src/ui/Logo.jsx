import { Link } from 'react-router-dom';
import style from './Header.module.css';

function Logo() {
  return (
    <div className={style.logo}>
      <Link to="/">
      <img src="images/logo.png" alt="Logo" />
      </Link>
    </div>
  )
}

export default Logo
