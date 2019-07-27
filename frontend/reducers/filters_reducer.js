import { UPDATE_BOUNDS } from "../actions/filter_actions";
import { merge } from "lodash";


const filtersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case UPDATE_BOUNDS:
      return merge({}, state, { [action.currentUser.id]: action.currentUser });
    default:
      return state;
  }
};

export default filtersReducer;