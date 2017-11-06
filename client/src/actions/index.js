import axios from "axios";
import { FETCH_VALUES } from "./types";

export const fetchValues = () => async dispatch => {
  const res = await axios.get("/currency");
  console.log("res", res);
  dispatch({
    type: FETCH_VALUES,
    payload: res.data.properties
  });
};

export const dataFeed = socket => {
  console.log("datafeed() ran!");
  return dispatch => {
    socket.on("subscribeToFeed", res => {
      console.log("data is streaming");
      dispatch(fetchValues(res.feed));
    });
  };
};
