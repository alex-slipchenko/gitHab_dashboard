import { createAsyncThunk } from "@reduxjs/toolkit";
import SLICE from "./constants";
import method from "../../service/getMethodApi";

const thunks = {
  getUser1: createAsyncThunk(`${SLICE}/getUser1`, async (userName) => {
    try {
      const response = await method.getUserBattle(userName);
      return response;
    } catch (error) {
      if (error.response) {
        return `Username not exist: ${error.response.status}`;
      } else if (error.request) {
        return `No response received: ${error.request}`;
      } else {
        return `Error occurred :${error.message}`;
      }
    }
  }),
  getUser2: createAsyncThunk(`${SLICE}/getUser2`, async (userName) => {
    try {
      const response = await method.getUserBattle(userName);
      return response;
    } catch (error) {
      if (error.response) {
        console.log("Username not exist: ");
        return `Username not exist: ${error.response.status}`;
      } else if (error.request) {
        return `No response received: ${error.request}`;
      } else {
        console.log("Error occurred: ");
        return `Error occurred :${error.message}`;
      }
    }
  }),
  getUserRepos1: createAsyncThunk(
    `${SLICE}/getUserRepos1`,
    async (userName) => {
      const response = await method.getReposUserBattle(userName);
      return response;
    }
  ),
  getUserRepos2: createAsyncThunk(
    `${SLICE}/getUserRepos2`,
    async (userName) => {
      const response = await method.getReposUserBattle(userName);
      // console.log(response);
      return response;
    }
  ),
};

export default thunks;
