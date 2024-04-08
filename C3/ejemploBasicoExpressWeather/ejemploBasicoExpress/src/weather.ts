import axios from "axios";

// En el futuro lo vamos a manejar con .env
const API_ACCESS_KEY = "";

export const weather = (
  address: string,
  callback: (error?: string, response?: any) => void
) => {
  axios
    .get(
      `http://api.weatherstack.com/current?access_key=${API_ACCESS_KEY}&query=${address}`
    )
    .then((response) => {
      if (response.data.error) {
        callback(`Unable to retrieve weather data from location ${address}`);
      } else {
        callback(undefined, response.data);
      }
    })
    .catch((error) => {
      callback(
        `Unable to retrieve weather data from API ${JSON.stringify(error)}`
      );
    });
};
