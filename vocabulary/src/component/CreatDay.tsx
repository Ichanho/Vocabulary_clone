import Daylist, {Iday} from "./Daylist"
import {useNavigate} from "react-router-dom"
import useFetch from "../Hooks/useFetch";

function CreatDay(){
  const days:Iday[] = useFetch(`http://localhost:3001/days`);
  const navigate = useNavigate();

  function handleDay(){
    fetch("http://localhost:3001/days/",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        day: days.length+1,
      }),
    }).then((res)=>{
      alert("생성이 완료되었습니다.");
      navigate("/");
    });
  }

  return <div>
    <p>현재 일수 : {days.length}</p>
    <button onClick={handleDay}>Day 추가</button>
  </div>
}

export default CreatDay;