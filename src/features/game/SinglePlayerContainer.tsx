import { Space, Typography } from "antd";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import SinglePlayerLayout from "../../components/SinglePlayerLayout";
import SinglePlayerOver from "../../components/SinglePlayerOver";
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
      return (
        <SinglePlayerOver
          nQuestions={game.questions.length}
          score={game.score}
          reload={() => dispatch(loadGame())}
        />
      );
    }

    const question =
      singlePlayerGameState.game.questions[singlePlayerGameState.step];

    return (
      <SinglePlayerLayout
        answerQuestion={(isCorrect) =>
          dispatch(singlePlayerActions.answerQuestion(isCorrect))
        }
        state={singlePlayerGameState}
        question={question}
      />
    );
  };

  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Typography.Title level={5}>Single player game</Typography.Title>
      {singlePlayerCore()}
    </Space>
  );
};

export default SinglePlayerContainer;
