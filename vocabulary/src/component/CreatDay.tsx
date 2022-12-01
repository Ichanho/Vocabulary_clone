import {Iday} from "./Daylist"
import useFetch from "../Hooks/useFetch";

function CreatDay(){
  const day:Iday[] = useFetch(`http://localhost:3001/days`);

  // fetch(`http://localhost:3001/words/${word.id}`,{
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       ...word,
  //       isDone: !isDone,
  //     }),
  //   }).then((res)=>{
  //     if(res.ok){
  //       setIsDone(!isDone);
  //     }
  //   });

  return <div></div>
}

export default CreatDay;