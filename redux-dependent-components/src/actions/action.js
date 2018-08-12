export const UPDATE_TEAM = "UPDATE_TEAM";
export const updateTeam = team => {
  return {
    type: UPDATE_TEAM,
    newTeam: team
  };
};

export const UPDATE_TYPE = "UPDATE_TYPE";
export const updateType = type => {
  return {
    type: UPDATE_TYPE,
    newType: type
  };
};
