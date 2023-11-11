import axios from "axios";

export const GetData = async () => {
  const base = "/photos.json";

  try {
    const response = await axios.get(base);
    return response;
    } catch (error) {
    console.log(error);
  }
};
