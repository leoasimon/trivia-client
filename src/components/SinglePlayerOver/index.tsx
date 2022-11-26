import { Button, Space, Typography } from "antd";
import { Link } from "react-router-dom";

import "./index.css";

interface SinglePlayerOverProps {
  nQuestions: number;
  score: number;
  reload: () => void;
}

const SinglePlayerOver: React.FC<SinglePlayerOverProps> = ({
  nQuestions,
  score,
  reload,
}) => {
  return (
    <Space direction="vertical" className="game-over-screen">
      <Typography.Title>
        {score} / {nQuestions}
      </Typography.Title>
      <Button block onClick={reload}>
        Play again
      </Button>
      <Button block>
        <Link to="/">Back to main menu</Link>
      </Button>
    </Space>
  );
};

export default SinglePlayerOver;
