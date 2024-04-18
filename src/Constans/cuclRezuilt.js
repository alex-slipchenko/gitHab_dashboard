import userRow from "./usersIconResult";

const calculateRezult = (number1, number2) => {
  if (number1 > number2) {
    return userRow.winner;
  } else {
    return userRow.loser;
  }
};
export default calculateRezult;
