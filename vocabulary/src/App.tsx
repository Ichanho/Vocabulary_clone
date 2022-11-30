import {BrowserRouter, Routes,Route} from "react-router-dom"
import Header from "./component/Header";
import Home from "./Home";
import Day from "./component/Day";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/day/:day" element={<Day />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
