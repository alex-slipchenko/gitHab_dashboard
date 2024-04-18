import React from "react";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { allDelete } from "../../store/BattleSlice/slice";
export default function Restart() {
  const dispatch = useDispatch();

  const handleRestart = () => {
    dispatch(allDelete());
  };
  const { restartIsActive } = useSelector((state) => state.battle);
  return restartIsActive ? (
    <Button
      onClick={handleRestart}
      type="button"
      variant="contained"
      color="primary"
      className="button_restart"
      sx={{ display: "block", margin: "0 auto" }}
    >
      Restart
    </Button>
  ) : null;
}
