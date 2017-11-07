import { FETCH_VALUES } from "../actions/types";

export default function currencyReducer(state = {}, actions) {
  switch (actions.type) {
    case FETCH_VALUES:
      console.log("payload", actions.payload);
      return {
        ...state,
        values: actions.payload
      };
    default:
      return state;
  }
}
