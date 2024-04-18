import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ElderlyWomanIcon from "@mui/icons-material/ElderlyWoman";
import StarPurple500Icon from "@mui/icons-material/StarPurple500";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import "./style.css";
function Form({ user, setValue, getUser }) {
  let вася = "";
  console.log(user);
  const getInputValue = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    getUser.data(user.valueInput);
  };

  const handleResset = () => {
    console.log(user);
    getUser.resset();
  };

  return (
    <div className="wrap_rezult">
      <h2>{user.rezult}</h2>
      <form onSubmit={handleSubmit}>
        {user.input === "outlined" && user.submitIsActive && (
          <TextField
            id="outlined-basic"
            label={user.title}
            variant="outlined"
            fullWidth
            value={user.valueInput}
            onChange={getInputValue}
          />
        )}
        {user.input === "filled" && user.submitIsActive && (
          <TextField
            id="outlined-basic"
            label={user.title}
            variant="filled"
            fullWidth
            value={user.valueInput}
            onChange={getInputValue}
          />
        )}
        {user.SetError && <div className="error">{user.SetError}</div>}
        {user.photo && <img src={user.photo} />}
        {user.name && <h2>{user.name}</h2>}
        {user.totalScore && (
          <ul>
            <li>
              <ElderlyWomanIcon />
              Followers: {user.followers}
            </li>
            <li>
              <StarPurple500Icon />
              Repositories: {user.reposStar}
            </li>
            <li>
              <SportsScoreIcon />
              Totals score: {user.totalScore}
            </li>
          </ul>
        )}
        {user.submitIsActive && (
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        )}
        {user.ressetIsActive && (
          <Button
            type="button"
            variant="contained"
            color="primary"
            className="form__resset"
            onClick={handleResset}
          >
            Resset
          </Button>
        )}
      </form>
    </div>
  );
}

export default Form;
