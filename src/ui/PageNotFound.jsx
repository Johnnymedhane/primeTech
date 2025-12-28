
import { useNavigate } from 'react-router-dom';
import Button from './Button'
import styles from './PageNotFound.module.css'


function PageNotFound() {
  const navigate = useNavigate();
  function moveBack() {
    navigate(-1);
  }
  return (
    <div className={styles.container}>
      <div className={styles.message}>   <h1>
          The page you are looking for could not be found 😢
        </h1>
        <Button onClick={moveBack} >
          &larr; Go back
        </Button>
    </div>
    </div>
  )
}

export default PageNotFound
