import { createAsyncThunk } from "@reduxjs/toolkit";
import SLICE from "./constants";
import method from "../../service/getMethodApi";

const thunks = {
  getLenguages: createAsyncThunk(`${SLICE}/getLenguages`, async () => {
    const response = await method.getLanguages();
    return response;
  }),
  getRepos: createAsyncThunk(`${SLICE}/getRepos`, async (checkedLanguage) => {
    const response = await method.getUsersRepos(checkedLanguage);
    // console.log(response);
    return response;
  }),
  getCart: createAsyncThunk(`${SLICE}/getCart`, async (id) => {
    const response = await method.getCart(id);
    // console.log(response);
    return response;
  }),
};

export default thunks;
