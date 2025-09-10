import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";

export default function Bai1() {
  return (
    <div>
      <nav style={{ display: "flex", gap: "10px" }}>
        <Link to="">Home</Link>
        <Link to="contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
