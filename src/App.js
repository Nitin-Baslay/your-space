import { Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./components/Auth";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Auth />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
