import { createSlice } from "@reduxjs/toolkit";
import SLICE from "./constants";
import thunks from "./thunks";
import calculateSum from "../../Constans/culcSum";
const initialState = {
  firstUser: {
    input: "outlined",
    title: "Player 1",
    valueInput: "",
    // SetError: "",
    followers: "",
    reposStar: "",
    photo: "",
    name: "",
    login: "",
    submitIsActive: true,
    ressetIsActive: "",
    activeRez: "",
  },
  secondUser: {
    input: "filled",
    title: "Player 2",
    valueInput: "",
    followers: "",
    reposStar: "",
    photo: "",
    name: "",
    login: "",
    submitIsActive: true,
    ressetIsActive: "",
    activeRez: "",
  },
  listIsActive: "",
  restartIsActive: "",
};

export const slice = createSlice({
  name: SLICE,
  initialState,
  reducers: {
    addValue1: (state, { payload }) => {
      state.firstUser.valueInput = payload;
    },
    addValue2: (state, { payload }) => {
      state.secondUser.valueInput = payload;
    },
    resset1: (state) => {
      state.firstUser = initialState.firstUser;
      state.battleIsActive = "";
    },
    resset2: (state) => {
      state.secondUser = initialState.secondUser;
      state.battleIsActive = "";
    },
    allDelete: () => initialState,

    restart: (state, { payload }) => {
      state.restartIsActive = payload;
    },
    deleteButtonResset: (state) => {
      state.firstUser.ressetIsActive = false;
      state.secondUser.ressetIsActive = false;
    },
    setRezault1: (state, { payload }) => {
      state.firstUser.rezult = payload;
    },
    setRezault2: (state, { payload }) => {
      state.secondUser.rezult = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      //=---getUser1------------------------------------------------------
      .addCase(thunks.getUser1.fulfilled, (state, { payload }) => {
        console.log(typeof payload);
        if (typeof payload === "string") {
          state.firstUser.SetError = payload;
        } else {
          state.firstUser.SetError = "";
          state.firstUser.photo = payload.avatar_url;
          state.firstUser.followers = payload.followers;
          state.firstUser.login = payload.login;
          state.firstUser.name = payload.name ? payload.name : payload.login;
          state.firstUser.submitIsActive = false;
          state.firstUser.ressetIsActive = true;
        }
      })
      // =----getUser2---------------------------------------------
      .addCase(thunks.getUser2.fulfilled, (state, { payload }) => {
        if (typeof payload === "string") {
          state.secondUser.SetError = payload;
        } else {
          state.secondUser.SetError = "";
          state.secondUser.photo = payload.avatar_url;
          state.secondUser.followers = payload.followers;
          state.secondUser.login = payload.login;
          state.secondUser.name = payload.name ? payload.name : payload.login;
          state.secondUser.submitIsActive = false;
          state.secondUser.ressetIsActive = true;
        }
      })

      //=----Repos1----------------------------------------------------
      .addCase(thunks.getUserRepos1.fulfilled, (state, { payload }) => {
        state.firstUser.reposStar = calculateSum(payload);
        state.firstUser.totalScore =
          calculateSum(payload) + state.firstUser.followers;
        state.firstUser.activeRez = true;
      })

      //=----Repos2----------------------------------------------------
      .addCase(thunks.getUserRepos2.fulfilled, (state, { payload }) => {
        state.secondUser.reposStar = calculateSum(payload);
        state.secondUser.totalScore =
          calculateSum(payload) + state.secondUser.followers;
        state.secondUser.activeRez = true;
      });
  },
});

export const {
  addValue1,
  addValue2,
  resset1,
  resset2,
  restart,
  allDelete,
  deleteButtonResset,
  setRezault1,
  setRezault2,
} = slice.actions;

export default slice.reducer;
