import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import thunks from "../../store/BattleSlice/thunks";
import {
  restart,
  deleteButtonResset,
  setRezault1,
  setRezault2,
} from "../../store/BattleSlice/slice";
import calculateRezult from "../../Constans/cuclRezuilt";
import "./style.css";

export default function BattleButton() {
  const dispatch = useDispatch();
  const { firstUser, secondUser, restartIsActive } = useSelector(
    (state) => state.battle
  );

  const handleBatton = () => {
    dispatch(thunks.getUserRepos1(firstUser.login));
    dispatch(thunks.getUserRepos2(secondUser.login));
    dispatch(restart(true));
    dispatch(deleteButtonResset());
  };

  useEffect(() => {
    if (firstUser.activeRez && secondUser.activeRez) {
      dispatch(
        setRezault1(
          calculateRezult(firstUser.totalScore, secondUser.totalScore)
        )
      );
      dispatch(
        setRezault2(
          calculateRezult(secondUser.totalScore, firstUser.totalScore)
        )
      );
    }
  }, [firstUser.activeRez, secondUser.activeRez]);

  return firstUser.photo && secondUser.photo && !restartIsActive ? (
    <Button
      type="button"
      variant="contained"
      color="primary"
      className="button__battle"
      onClick={handleBatton}
      sx={{ display: "block", margin: "0 auto" }}
    >
      Battle
    </Button>
  ) : null;
}
