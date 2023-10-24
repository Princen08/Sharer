import axios from "axios";

export const updateCode = async (data, id) => {
  try {
    const res = await axios.post(`http://localhost:4000/updateCode/${id}`, {
      data: data,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};
