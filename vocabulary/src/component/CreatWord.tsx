import { useRef, SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom"
import useFetch from "../Hooks/useFetch";
import { Iday } from "./Daylist"
import styles from "./CreatWord.module.css"


function CreatWord() {
  const [isLoading, setIsLoading] = useState(false);
  const days: Iday[] = useFetch(`http://localhost:3001/days`);
  const navigate = useNavigate();

  function handleWord(event: SyntheticEvent) {
    event.preventDefault();

    if (!isLoading && dayRef.current && engRef.current && korRef.current) {
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
      }).then((res) => {
        if (res.ok) {
          alert("생성이 완료 되었습니다.");
          navigate(`/day/${day}`);
        }
      })
    }
  }

  const engRef = useRef<HTMLInputElement>(null);
  const korRef = useRef<HTMLInputElement>(null);
  const dayRef = useRef<HTMLSelectElement>(null);

  return <form onSubmit={handleWord} className={styles.input_area}>
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
    <button style={{ opacity: isLoading ? 0.3 : 1 }}>{isLoading ? "Saving...." : "저장"}</button>
  </form>
}

export default CreatWord;