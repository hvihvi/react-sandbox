import initialState from "./initialState";
import { UPDATE_TEAM, UPDATE_TYPE } from "../actions/action";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TEAM:
      return { ...state, team: action.newTeam };
    case UPDATE_TYPE:
      return { ...state, type: action.newType };
    default:
      return state;
  }
};

export default reducer;
