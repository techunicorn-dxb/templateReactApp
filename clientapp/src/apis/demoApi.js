import axios from "./axiosJWTDecorator";
import { getBaseUrl } from "./configVars";

let baseAxiosUrl = getBaseUrl() + "/api";

export const getRandomUser = async () => {
  let url = baseAxiosUrl + "";
  return await axios.get(url);
};
