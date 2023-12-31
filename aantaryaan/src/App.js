import logo from "./logo.svg";
import "./App.css";
import { Routes, BrowserRouter as Router, Route, Link } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Saturn from "./pages/saturn";
import Img from "./pages/img";
import MyBook from "./pages/flipbook";
import Jupi from "./pages/Jupi";
import Planet from "./pages/Planet";
import ActivitiesPage from "./pages/ActivitiesPage";
import ContextProvider from "./context/ContextProvider";
import Bookings from "./pages/Bookings";
function App() {
  return (
    <ContextProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/saturn" element={<Saturn />} />
            <Route path="/universe" element={<Img />} />
            <Route path="/planet" element={<Planet />} />
            <Route path="/activities" element={<ActivitiesPage />} />
            <Route path="/Jupi" element={<Jupi />} />
            <Route path="/flip" element={<MyBook />} />
            <Route path="/bookings" element={<Bookings />} />
          </Routes>
        </div>
      </Router>
    </ContextProvider>
  );
}

export default App;
