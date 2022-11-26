import { Button, List } from "antd";
import { Link } from "react-router-dom";

const GameMenu: React.FC = () => {
  return (
    <List>
      <List.Item>
        <Button block>
          <Link to="single-player">Single player</Link>
        </Button>
      </List.Item>
    </List>
  );
};

export default GameMenu;
