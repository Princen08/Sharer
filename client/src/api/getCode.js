import axios from "axios";

export const getCode = async (codeId) => {
  try {
    const res = await axios.get(`http://localhost:4000/getCode/${codeId}`);
    return res;
  } catch (err) {
    console.log(err);
  }
};
