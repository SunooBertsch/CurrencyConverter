import { FETCH_VALUES } from "../actions/types";

export default function(state = {}, actions) {
  switch (actions.type) {
    case FETCH_VALUES:
      console.log("payload", actions.payload);
      return actions.payload;
    default:
      return state;
  }
}
