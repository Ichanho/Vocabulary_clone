import { useState } from "react";
import styles from "./Word.module.css"

interface Iporps {
  word: Iword;
}
export interface Iword {
  id: number;
  day: number;
  eng: string;
  kor: string;
  isDone: boolean;
}
function Word({ word: w }: Iporps) {
  const [word, setWord] = useState(w);
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);


  function toggleDone() {
    fetch(`http://localhost:3001/words/${word.id}`,{
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...word,
        isDone: !isDone,
      }),
    }).then((res)=>{
      if(res.ok){
        setIsDone(!isDone);
      }
    });
  }

  function toggleShow() {
    setIsShow(!isShow);
  }

  function del() {
    if(window.confirm("정말 삭제하시겠습니까?")){
      fetch(`http://localhost:3001/words/${word.id}`,{
        method: "DELETE",
      }).then((res)=>{
        if(res.ok){
          setWord({
            ...word,
            id: 0,
          });
        }
      })
    }
  }

  if(word.id === 0){
    return null;
  }

  return <tr className={isDone ? styles.off : ""}>
    <td className={styles.check_box}><input type="checkbox" checked={isDone} onChange={toggleDone} /></td>
    <td>{word.eng}</td>
    <td>{isShow === true ? word.kor : ''}</td>
    <td>
      <button onClick={toggleShow} className={styles.show_btn}>뜻 보기</button>
      <button onClick={del} className={styles.del_btn}>삭제</button>
    </td>
  </tr>
}

export default Word;