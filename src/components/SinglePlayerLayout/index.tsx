import { Space } from "antd";
import QuestionPlay from "../../features/game/components/QuestionPlay";
import { SinglePlayerState } from "../../features/game/singlePlayerSlice";
import { Question } from "../../features/game/types";

import "./index.css";

interface SinglePlayerLayoutProps {
  question: Question;
  state: SinglePlayerState;
  answerQuestion: (isCorrect: boolean) => void;
}

const SinglePlayerLayout: React.FC<SinglePlayerLayoutProps> = ({
  question,
  answerQuestion,
  state,
}) => {
  return (
    <>
      <QuestionPlay question={question} answerQuestion={answerQuestion} />

      <Space className="game-info">
        <span>Score: {state.game.score}</span>
        <span>
          Question {state.step + 1} / {state.game.questions.length}
        </span>
      </Space>
    </>
  );
};

export default SinglePlayerLayout;
