import axios from "axios";
import { FETCH_VALUES } from "./types";

export const fetchValues = () => async dispatch => {
  const res = await axios.get("/currency");
  dispatch({
    type: FETCH_VALUES,
    payload: res.data
  });
};
