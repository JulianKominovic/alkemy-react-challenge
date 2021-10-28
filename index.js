require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/login", (req, response) => {
  axios({
    url: "http://challenge-react.alkemy.org/",
    method: "GET",
    data: {
      email: req.body.email,
      password: req.body.password,
    },
  })
    .then((res) => response.json(res.data))
    .catch((err) => response.json(err.response.data));
});

app.get("/api/search/:name", (req, response) => {
  axios({
    url: `https://superheroapi.com/api/${process.env.API_HEROES_KEY}/search/${req.params.name}`,
    method: "GET",
  })
    .then((r) => response.json(r.data))
    .catch((err) => response.json(err.data));
});

app.get("/api/details/:id", (req, response) => {
  axios({
    url: `https://superheroapi.com/api/${process.env.API_HEROES_KEY}/${req.params.id}`,
    method: "GET",
  })
    .then((r) => response.json(r.data))
    .catch((err) => response.json(err.data));
});

app.use((request, response) => {
  response.status(404).json({ error: "Bad api request" });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log("Listening on port 8000!");
});
