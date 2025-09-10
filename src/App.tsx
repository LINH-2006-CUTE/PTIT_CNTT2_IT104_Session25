import { Routes, Route, Link } from "react-router-dom";
import Bai1 from "./pages/Bai1/Index"; 
import Bai2 from "./pages/Bai2"; 
import Bai5 from "./pages/Bai5"; 
import Bai6 from "./pages/Bai6"; 
import NotFound from "./pages/Bai5"; 
import Bai7 from "./pages/Bai7"; 
import Bai8 from "./pages/Bai8"; 
import Bai9 from "./pages/Bai9"; 

function App() {
  return (
    <div>
      <h1>Danh sách Bài tập</h1>
      <nav style={{ display: "flex", gap: "10px" }}>
        <Link to="/bai1">Bài 1</Link>
        <Link to="/bai2">Bài 2</Link>
        <Link to="/bai3">Bài 5</Link>
        <Link to="/bai4">Bài 6</Link>
           <Link to="/bai4">Bài 7</Link>
              <Link to="/bai4">Bài 8</Link>
                 <Link to="/bai4">Bài 9</Link>
      </nav>

      <Routes>
        <Route path="/bai1/*" element={<Bai1 />} />
        <Route path="/bai2/*" element={<Bai2 />} />
        <Route path="/bai3/*" element={<Bai5 />} />
        <Route path="/bai4/*" element={<Bai6 />} />
        <Route path="/bai4/*" element={<Bai7 />} />
        <Route path="/bai4/*" element={<Bai8 />} />
          <Route path="/bai4/*" element={<Bai9 />} />

      </Routes>
    </div>
  );
}

export default App;
