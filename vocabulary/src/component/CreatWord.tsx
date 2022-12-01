import { useRef, SyntheticEvent } from "react";
import {useNavigate} from "react-router-dom"
import useFetch from "../Hooks/useFetch";
import { Iday } from "./Daylist"
import { Iword } from "./Word"


function CreatWord() {
  const days: Iday[] = useFetch(`http://localhost:3001/days`);
  const navigate = useNavigate();

  function handleWord(event: SyntheticEvent) {
    event.preventDefault();

    if (dayRef.current && engRef.current && korRef.current){
      const day = dayRef.current.value;
      const eng = engRef.current.value;
      const kor = korRef.current.value;

      fetch("http://localhost:3001/words/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          day: day,
          eng: eng,
          kor: kor,
          isDone: false,
        }
        )
      }).then((res)=>{
        if(res.ok){
          alert("생성이 완료 되었습니다.");
          navigate(`/day/${day}`);
        }
      })
    }
  }

  const engRef = useRef<HTMLInputElement>(null);
  const korRef = useRef<HTMLInputElement>(null);
  const dayRef = useRef<HTMLSelectElement>(null);

  return <form onSubmit={handleWord}>
    <div>
      <label>Eng</label>
      <input type="text" placeholder="Ex) happy" ref={engRef} />
    </div>
    <div>
      <label>Kor</label>
      <input type="text" placeholder="Ex) 행복" ref={korRef} />
    </div>
    <div>
      <label>Day</label>
      <select ref={dayRef}>
        {days.map((day) => { return <option key={day.id} value={day.day}>{day.day}</option> })}
      </select>
    </div>
    <button>저장</button>
  </form>
}

export default CreatWord;