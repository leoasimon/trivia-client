import { Space, Typography } from "antd";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <Space direction="vertical" className="app-body">
        <Space className="app-header">
          <Typography.Title level={3}>Trivia</Typography.Title>
        </Space>
        <div className="app-content">
          <AppRoutes />
        </div>
      </Space>
    </BrowserRouter>
  );
}

export default App;
