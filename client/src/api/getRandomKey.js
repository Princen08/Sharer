import axios from "axios";

export const getRandomKey = async () => {
  try {
    const res = axios.get(`${process.env.REACT_APP_API_BASE_URL}/getRandomKey`);
    return res;
  } catch (err) {
    console.log(err);
  }
};
