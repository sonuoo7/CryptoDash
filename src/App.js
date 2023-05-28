import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import CoinsPage from "./pages/Coins";
import './App.css';
import DashboardPage from "./pages/Dashboard";
import Compare from "./pages/Compare";


function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Dashboard" element={<DashboardPage />} />
          <Route path="/Coins/:id" element={<CoinsPage />} />
          <Route path="/Compare" element={<Compare />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
