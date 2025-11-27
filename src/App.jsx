import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Settings from "./pages/SettingsPage";
import BottomNav from "./components/BottomNav";

const App = () => {
  return (
    <Router>
      <div style={{ paddingBottom: "90px" }}> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>

      <BottomNav />
    </Router>
  );
};

export default App;
