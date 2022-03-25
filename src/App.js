import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Login from "./pages/login/Login";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Train from './pages/train/Train';

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container-local">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/training" element={<Train /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
