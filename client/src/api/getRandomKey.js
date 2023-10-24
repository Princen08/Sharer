import axios from "axios";

export const getRandomKey = async () => {
  try {
    const res = axios.get("http://localhost:4000/getRandomKey");
    return res;
  } catch (err) {
    console.log(err);
  }
};
