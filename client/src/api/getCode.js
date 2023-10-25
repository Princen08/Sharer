import axios from "axios";

export const getCode = async (codeId) => {
  axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/getCode/${codeId}`);
    return res;
  } catch (err) {
    console.log(err);
  }
};
