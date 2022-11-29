import {BrowserRouter, Routes,Route} from "react-router-dom"
import Header from "./component/Header";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
