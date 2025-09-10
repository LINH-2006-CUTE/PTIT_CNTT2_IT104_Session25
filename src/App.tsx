// App.tsx
import { Routes, Route, Link } from "react-router-dom";
import Bai1 from "./pages/Bai1/Index"; 
import Bai2 from "./pages/Bai2/Contact"; 
import Bai5 from "./pages/Bai5"; 
import Bai6 from "./pages/Bai6/Index"; 
import Bai7 from "./pages/Bai7/Index"; 
import Bai8 from "./pages/Bai8/Index"; 
import Bai9 from "./pages/Bai9/Index"; 

function App() {
  return (
    <div>
      <h1>Danh sách Bài tập</h1>
      <nav style={{ display: "flex", gap: "10px" }}>
        <Link to="/bai1">Bài 1</Link>
        <Link to="/bai2">Bài 2</Link>
        <Link to="/bai5">Bài 5</Link>
        <Link to="/bai6">Bài 6</Link>
        <Link to="/bai7">Bài 7</Link>
        <Link to="/bai8">Bài 8</Link>
        <Link to="/bai9">Bài 9</Link>
      </nav>

      <Routes>
        <Route path="/bai1/*" element={<Bai1 />} />
        <Route path="/bai2/*" element={<Bai2 />} />
        <Route path="/bai5/*" element={<Bai5 />} />
        <Route path="/bai6/*" element={<Bai6 />} />
        <Route path="/bai7/*" element={<Bai7 />} />
        <Route path="/bai8/*" element={<Bai8 />} />
        <Route path="/bai9/*" element={<Bai9 />} />
      </Routes>
    </div>
  );
}

export default App;
