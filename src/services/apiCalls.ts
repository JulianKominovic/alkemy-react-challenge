import axios from "axios";
require("dotenv").config();

export const searchHero = (search: string) => {
  return axios.get(`https://heroes-alkemy.herokuapp.com/api/search/${search}`);
};

export const getHeroDetails = (id: number) => {
  return axios.get(`https://heroes-alkemy.herokuapp.com/api/details/${id}`);
};
