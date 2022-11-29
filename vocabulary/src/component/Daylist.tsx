import { useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../Hooks/useFetch"

interface Iday {
  id: number,
  day: number
}

function Daylist() {
  const days: Iday[] = useFetch("http://localhost:3001/days");
  return <div>
    <ul>
      {days.map((day) => { 
        return <li key={day.id}><Link to={`/day/${day.day}`}>Day {day.day}</Link></li> })}
    </ul>
  </div>
}

export default Daylist;