import { Outlet, Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <Link to="/notes">NOTES</Link> | <Outlet />
    </div>
  );
}
