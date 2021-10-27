import axios from "axios";
require("dotenv").config();

const API_BASE_URL = `https://superheroapi.com/api/${process.env.REACT_APP_API_KEY}`;

export const searchHero = (search: string) => {
  return axios.get(`${API_BASE_URL}/search/${search}`);
};

export const getHeroDetails = (id: number) => {
  return axios.get(`${API_BASE_URL}/${id}`);
};
