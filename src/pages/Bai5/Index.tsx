import { Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";

export default function Bai3() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
