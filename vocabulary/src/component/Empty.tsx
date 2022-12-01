import { Link } from "react-router-dom"
function Empty() {


  return <div>
    <p>잘못된 경로입니다.</p>
    <Link to="/">돌아가기</Link>
  </div>
}

export default Empty;