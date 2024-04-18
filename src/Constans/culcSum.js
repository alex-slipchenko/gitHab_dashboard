const calculateSum = (data) => {
  return data.reduce(
    (accamulator, currentValue) => accamulator + currentValue.stargazers_count,
    0
  );
};

export default calculateSum;
