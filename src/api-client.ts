import axios from "axios";
import { API_SERVER_URL } from "./public-config";

export const fetchTestResults = async () => {
  const resp = await axios.get(`${API_SERVER_URL}/test-results`);
  return await resp.data.testResults;
};
