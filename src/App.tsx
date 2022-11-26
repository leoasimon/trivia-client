import { Divider, Space, Typography } from "antd";
import "./App.css";
import GameMenu from "./components/GameMenu";

function App() {
  return (
    <Space direction="vertical" className="app-body">
      <Space className="app-header">
        <Typography.Title level={3}>Trivia</Typography.Title>
      </Space>
      <Divider />
      <Space className="app-content">
        <GameMenu />
      </Space>
    </Space>
  );
}

export default App;
