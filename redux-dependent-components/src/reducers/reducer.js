import initialState from "./initialState";
import { UPDATE_PROJECT, UPDATE_TEAM, UPDATE_TYPE } from "../actions/action";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TEAM:
      return { ...state, team: action.newTeam };
    case UPDATE_TYPE:
      return { ...state, type: action.newType };
    case UPDATE_PROJECT:
      return { ...state, project: action.newProject };
    default:
      return state;
  }
};

export default reducer;
