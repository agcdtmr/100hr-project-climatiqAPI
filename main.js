import { CLIMATIQ_API_KEY } from "./secret.js";

const baseURL = "https://beta3.api.climatiq.io";

const endpoint = new URL("emission-factors", baseURL);

const params = {
  year: "2022",
  region: "NL",
  sector: "energy",
};

endpoint.search = new URLSearchParams(params).toString();

fetch(endpoint, {
  method: "GET",
  headers: {
    Authorization: `Bearer: ${CLIMATIQ_API_KEY}`,
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data));
