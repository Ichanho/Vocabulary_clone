import {Link} from "react-router-dom"
import styles from "./Header.module.css"

function Header(){

  return <div className={styles.header}>
    <Link to="/"><p className={styles.title}>이찬호의 영단어장</p></Link>
    <div className={styles.menu}>
    <Link to="/creat_word"><button>단어 추가</button></Link>
    <Link to="/creat_day"><button>Day 추가</button></Link>
    </div>
  </div>
}

export default Header;