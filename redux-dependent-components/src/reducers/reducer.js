import initialState from "./initialState";
import { UPDATE_TEAM } from "../actions/action";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TEAM:
      return { ...state, team: action.newTeam };
    default:
      return state;
  }
};

export default reducer;
