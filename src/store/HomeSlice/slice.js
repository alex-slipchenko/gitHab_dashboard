import { createSlice } from "@reduxjs/toolkit";
import SLICE from "./constants";
import thunks from "./thunks";

const initialState = {
  nav: [
    {
      path: "/",
      element: "Home",
    },
    {
      path: "/battle",
      element: "Battle",
    },
  ],
  tabIsloading: false,
  reposIsloading: false,
  alertContent: "",
  languages: [],
  repositories: [],
  cartBox: {},
  setId: "",
  valueTab: 0,
};

export const slice = createSlice({
  name: SLICE,
  initialState,
  reducers: {
    addIndexTab: (state, { payload }) => {
      state.valueTab = payload;
    },
    alertRow: (state, { payload }) => {
      state.alertContent = payload;
    },
    alertActive: (state, { payload }) => {
      state.alertIsloading = payload;
    },
    idUser: (state, { payload }) => {
      state.setId = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(thunks.getLenguages.fulfilled, (state, { payload }) => {
        state.languages = Object.keys(payload);
        state.tabIsloading = !state.tabIsloading;
      })
      .addCase(thunks.getLenguages.pending, (state, { payload }) => {
        state.tabIsloading = !state.tabIsloading;
      })
      .addCase(thunks.getRepos.fulfilled, (state, { payload }) => {
        state.repositories = payload.items;
        state.alertIsloading = payload.total_count ? false : true;
        state.reposIsloading = false;
      })
      .addCase(thunks.getRepos.pending, (state, { payload }) => {
        state.reposIsloading = true;
      })
      .addCase(thunks.getCart.pending, (state, { payload }) => {
        state.cartLoading = true;
      })
      .addCase(thunks.getCart.fulfilled, (state, { payload }) => {
        state.cartLoading = false;
        state.cartBox = payload;
      });
  },
});

export const { addIndexTab, alertRow, alertActive, idUser } = slice.actions;

export default slice.reducer;
