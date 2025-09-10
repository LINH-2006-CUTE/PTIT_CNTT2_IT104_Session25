import { Routes, Route } from "react-router-dom";
import ListUser from "./ListUser";
import UserDetail from "./UserDetail";

export default function Bai6() {
  return (
    <Routes>
      <Route path="/" element={<ListUser />} />
      <Route path="user/:id" element={<UserDetail />} />
    </Routes>
  );
}
