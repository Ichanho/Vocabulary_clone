import {Link} from "react-router-dom"

function Header(){

  return <div>
    <Link to="/"><p>이찬호의 영단어장</p></Link>
    <button>단어 추가</button>
    <button>단어 삭제</button>
  </div>
}

export default Header;