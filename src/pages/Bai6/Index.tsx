import { NavLink, Routes, Route } from "react-router-dom";

function Home() {
  return <h2>Home</h2>;
}
function Product() {
  return <h2>Product</h2>;
}
function Detail() {
  return <h2>Detail</h2>;
}

export default function Bai4() {
  return (
    <div>
      <nav style={{ display: "flex", gap: "10px" }}>
        <NavLink to="" style={({ isActive }) => ({ background: isActive ? "red" : "" })}>Home</NavLink>
        <NavLink to="product" style={({ isActive }) => ({ background: isActive ? "red" : "" })}>Product</NavLink>
        <NavLink to="detail" style={({ isActive }) => ({ background: isActive ? "red" : "" })}>Detail</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="detail" element={<Detail />} />
      </Routes>
    </div>
  );
}
