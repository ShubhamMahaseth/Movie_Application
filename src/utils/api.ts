// external dependencies
import axios from "axios";

// internal dependencies
import { BASE_URL, HEADER } from "../config/constant";

/**
 *
 * @param url
 * @param params
 * @returns
 */
export const handleGetRequest = async (endPoint, params) => {
  try {
    const { data } = await axios.get(`${BASE_URL}${endPoint}`, {
      headers: HEADER,
      params,
    });
    return data;
  } catch (err) {
    console.error(err);
    return err;
  }
};
