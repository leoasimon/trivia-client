import { Route, Routes } from "react-router-dom";
import GameMenu from "./components/GameMenu";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route index element={<GameMenu />} />
      <Route path="single-player" element={<div>Single player</div>} />
    </Routes>
  );
};

export default AppRoutes;
