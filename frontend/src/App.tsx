import { Login } from "./Login";
import { Register } from "./Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MortrageCalculatorView } from "./views/MortrageCalculator/MortrageCalculatorView";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/calculator" element={<MortrageCalculatorView/>} />
      </Routes>
    </Router>
  );
}

export default App;
