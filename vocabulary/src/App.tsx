import {BrowserRouter, Routes,Route} from "react-router-dom"
import Header from "./component/Header";
import Home from "./Home";
import Day from "./component/Day";
import Empty from "./component/Empty";
import CreatDay from "./component/CreatDay";
import CreatWord from "./component/CreatWord";
import styles from "./App.module.css"

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/day/:day" element={<Day />} />
        <Route path="/creat_word" element={<CreatWord />} />
        <Route path="/creat_day" element={<CreatDay />} />
        <Route path="/*" element={<Empty />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
