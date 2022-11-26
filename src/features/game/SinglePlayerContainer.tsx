import { Space, Typography } from "antd";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import QuestionPlay from "./components/QuestionPlay";
import {
  loadGame,
  selectSinglePlayerGameState,
  singlePlayerActions,
} from "./singlePlayerSlice";

const SinglePlayerContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const singlePlayerGameState = useAppSelector(selectSinglePlayerGameState);

  useEffect(() => {
    dispatch(loadGame());
  }, [dispatch]);

  const singlePlayerCore = () => {
    const { status, step, game } = singlePlayerGameState;

    if (status !== "idle" || game.questions.length === 0) {
      return <Space>Loading...</Space>;
    }

    if (step === game.questions.length) {
      return <Space>Game over</Space>;
    }

    const question =
      singlePlayerGameState.game.questions[singlePlayerGameState.step];

    return (
      <>
        <QuestionPlay
          question={question}
          answerQuestion={(isCorrect) =>
            dispatch(singlePlayerActions.answerQuestion(isCorrect))
          }
        />

        <Space>
          <span>Score: {singlePlayerGameState.game.score}</span>
          <span>
            Question {singlePlayerGameState.step + 1} /{" "}
            {singlePlayerGameState.game.questions.length}
          </span>
        </Space>
      </>
    );
  };

  return (
    <Space direction="vertical">
      <Typography.Title level={5}>Single player game</Typography.Title>
      {singlePlayerCore()}
    </Space>
  );
};

export default SinglePlayerContainer;
