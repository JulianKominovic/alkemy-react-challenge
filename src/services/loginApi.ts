import axios from "axios";

export const authUser = (email: string, password: string) => {
  return axios({
    method: "post",
    url: "https://heroes-alkemy.herokuapp.com/api/login",
    data: {
      email: email,
      password: password,
    },
  })
    .then((res) => res.data)
    .catch((error) => error.response.data);
};
