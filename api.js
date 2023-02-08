import { MY_API_KEY } from "./secret.js";

const endpoint = "https://beta3.api.climatiq.io/search";

fetch(endpoint, {
  method: "GET",
  headers: {
    Authorization: `Bearer: ${MY_API_KEY}`,
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data));
