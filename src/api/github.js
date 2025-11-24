import axios from "axios";

export const fetchRepos = async (date, page) => {
  const response = await axios.get(
    `https://api.github.com/search/repositories?q=created:>${date}&sort=stars&order=desc&page=${page}`
  );
  return response.data.items;
};
