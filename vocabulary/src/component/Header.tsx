import {Link} from "react-router-dom"

function Header(){

  return <div>
    <Link to="/"><p>이찬호의 영단어장</p></Link>
    <Link to="/creat_word"><button>단어 추가</button></Link>
    <Link to="/creat_day"><button>Day 추가</button></Link>
  </div>
}

export default Header;