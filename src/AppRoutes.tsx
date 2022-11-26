import { Route, Routes } from "react-router-dom";
import GameMenu from "./components/GameMenu";
import SinglePlayerContainer from "./features/game/SinglePlayerContainer";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route index element={<GameMenu />} />
      <Route path="single-player" element={<SinglePlayerContainer />} />
    </Routes>
  );
};

export default AppRoutes;
