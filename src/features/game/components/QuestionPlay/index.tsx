import { Button, List, Space } from "antd";
import { useEffect, useState } from "react";

import "./index.css";
import { Question } from "../../types";

interface QuestionPlayProps {
  question: Question;
  answerQuestion: (isCorrect: boolean) => void;
}

const QuestionPlay: React.FC<QuestionPlayProps> = ({
  question,
  answerQuestion,
}) => {
  const [pickedAnswer, setPickedAnswer] = useState<string>();

  const handleAnswer = (a: string) => {
    setPickedAnswer(a);
    setTimeout(() => {
      const isCorrect = a === question.correctAnswer;
      answerQuestion(isCorrect);
    }, 500);
  };

  useEffect(() => {
    setPickedAnswer(undefined);
  }, [question]);

  const getClassModifier = (answer: string) => {
    if (pickedAnswer === answer && answer !== question.correctAnswer) {
      return "answer-wrong";
    }
    if (!!pickedAnswer && answer === question.correctAnswer) {
      return "answer-right";
    }
    return "";
  };

  return (
    <Space direction="vertical">
      <p>{question.question}</p>
      <List
        dataSource={question.answers}
        renderItem={(answer) => {
          const classModifier = getClassModifier(answer);
          return (
            <Button
              block
              onClick={() => handleAnswer(answer)}
              disabled={pickedAnswer !== undefined}
              className={`answer-btn ${classModifier}`}
            >
              {answer}
            </Button>
          );
        }}
      />
    </Space>
  );
};

export default QuestionPlay;
