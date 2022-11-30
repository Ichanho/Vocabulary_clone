import { useParams } from "react-router-dom"
import useFetch from "../Hooks/useFetch";
import Word,{Iword} from "./Word"

function Day() {
  const { day } = useParams<{ day: string }>();
  const words: Iword[] = useFetch(`http://localhost:3001/words?day=${day}`);
  console.log(words);

  return <div>
    <p>Day {day}</p>
    {words.length === 0 ? <p>Loding...</p> : ''}
    <table>
      <tbody>
        {words.map((word) => {
          return <Word word={word} key={word.id} />;
        })}
      </tbody>
    </table>
  </div>
}

export default Day;