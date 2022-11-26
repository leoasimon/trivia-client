import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../app/store";
import { Question, SinglePlayerGame } from "./types";

const apiUrl = "https://the-trivia-api.com/api";
const questionsUrl = `${apiUrl}/questions`;

export interface SinglePlayerState {
  game: SinglePlayerGame;
  step: number;
  status: "idle" | "loading" | "failed";
}

const emptyGame: SinglePlayerGame = {
  questions: [],
  score: 0,
};

const initialState: SinglePlayerState = {
  game: emptyGame,
  step: 0,
  status: "idle",
};

const arrayShuffle = <T>(arr: T[]): T[] => {
  return arr.sort(() => 0.5 - Math.random());
};

const formatQuestions = (apiResult: any[]): Question[] => {
  const questions = apiResult.map((apiQuestion) => {
    return {
      question: apiQuestion.question,
      correctAnswer: apiQuestion.correctAnswer,
      answers: arrayShuffle([
        apiQuestion.correctAnswer,
        ...apiQuestion.incorrectAnswers,
      ]),
    };
  });
  return questions;
};

export const loadGame = createAsyncThunk("singlePlayer/loadGame", async () => {
  const res = await axios.get(questionsUrl);
  return formatQuestions(res.data);
});

const singlePlayerSlice = createSlice({
  name: "singlePlayer",
  initialState,
  reducers: {
    answerQuestion: (state, action) => {
      const questionScore = action.payload === true ? 1 : 0;

      state.step += 1;
      state.game.score += questionScore;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadGame.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loadGame.fulfilled, (state, action) => {
        state.status = "idle";
        state.step = 0;
        state.game = {
          ...emptyGame,
          questions: action.payload,
        };
        // state.game.questions = action.payload;
      });
  },
});

export const selectSinglePlayerGameState = (state: RootState) =>
  state.singlePlayerGame;

export const { actions: singlePlayerActions } = singlePlayerSlice;

export default singlePlayerSlice.reducer;
