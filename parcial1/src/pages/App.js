import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
