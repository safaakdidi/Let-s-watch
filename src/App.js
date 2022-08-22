import "./App.css";
import Search from "./pages/Search";
import { Routes, Route } from "react-router-dom";
import Detail from "./pages/Detail";

function App() {
  return (
    //Routing using react-router-dom
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Search />}></Route>
        <Route path="/detail/:showId" element={<Detail />}></Route>
      </Routes>
    </div>
  );
}

export default App;

