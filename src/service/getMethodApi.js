import axios from "axios";

const API = `https://api.github.com/repos/microsoft/vscode/languages`;
const API2 = `https://api.github.com/search/repositories?q=stars:>1000+language:`;
const API3 = `https://api.github.com/repositories/`;
const API4 = `https://api.github.com`;
const method = {
  getLanguages: () => axios.get(API).then(({ data }) => data),
  getUsersRepos: (language) =>
    axios
      .get(API2 + `${language}&sort=stars&order=desc&type=Repositories`)
      .then(({ data }) => data),
  getCart: (id) => axios.get(API3 + `${id}`).then(({ data }) => data),

  getUserBattle: (userName) =>
    axios.get(API4 + `/users/${userName}`).then(({ data }) => data),
  getReposUserBattle: (userName) =>
    axios
      .get(API4 + `/users/${userName}/repos?per_page=100`)
      .then(({ data }) => data),
};

export default method;
