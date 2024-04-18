import React, { useEffect } from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useSelector, useDispatch } from "react-redux";
import {
  addIndexTab,
  alertRow,
  alertActive,
} from "../../store/HomeSlice/slice";
import thunks from "../../store/HomeSlice/thunks";
import SkeletonLoader from "../Skeleton/SkeletonLoader";
import "./style.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import notFound from "../../Constans/notFound";

export default function Languages() {
  const { languages, valueTab, tabIsloading, alertIsloading, alertContent } =
    useSelector((state) => state.home);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunks.getLenguages());
    dispatch(thunks.getRepos(languages[valueTab]));
  }, []);

  const handleChange = (event, newValue) => {
    dispatch(alertActive(false));
    dispatch(addIndexTab(newValue));
    dispatch(thunks.getRepos(languages[newValue]));
    dispatch(alertRow(notFound.language(languages[newValue])));
  };

  return languages.length ? (
    <>
      <Box
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          mb: "20px",
        }}
      >
        <Tabs
          value={valueTab}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {languages.map((item, index) => (
            <Tab label={item} key={index} />
          ))}
        </Tabs>
      </Box>
      {alertIsloading && (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert variant="filled" severity="error">
            {alertContent}
          </Alert>
        </Stack>
      )}
    </>
  ) : tabIsloading ? (
    <div className="sceleton_tab">
      <SkeletonLoader />
      <SkeletonLoader />
      <SkeletonLoader />
      <SkeletonLoader />
      <SkeletonLoader />
    </div>
  ) : null;
}
