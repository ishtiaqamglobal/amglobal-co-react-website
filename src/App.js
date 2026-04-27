import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainScreen from "./screens/Main-screen";
import StartAppling from "./screens/StartAppling/StartAppling";
import Vacancies from "./screens/Vacancies/Vacancies";
import ApplyDirectly from "./screens/ApplyDirectly/ApplyDirectly";
import AboutUs from "./screens/AboutUs/AboutUs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/startappling" element={<StartAppling />} />
          <Route path="/vacancies" element={<Vacancies />} />
          <Route path="/apply-directly" element={<ApplyDirectly />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
