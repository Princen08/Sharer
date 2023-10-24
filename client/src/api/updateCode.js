import axios from "axios";

export const updateCode = async (data, id) => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/updateCode/${id}`, {
      data: data,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};
