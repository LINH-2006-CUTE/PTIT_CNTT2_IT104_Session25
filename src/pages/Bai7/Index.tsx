import { Routes, Route } from "react-router-dom";
import CustomLink from "./CustomLink";
import HomePage from "./HomePage";
import NotFound from "./NotFound";

export default function Bai5() {
  return (
    <div>
      <CustomLink />
      <Routes>
        <Route path="home-page" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
