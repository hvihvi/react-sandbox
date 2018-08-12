export const UPDATE_TEAM = "UPDATE_TEAM";
export const updateTeam = team => {
  return {
    type: UPDATE_TEAM,
    newTeam: team
  };
};
