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

export const UPDATE_PROJECT = "UPDATE_PROJECT";
export const updateProject = project => {
  return {
    type: UPDATE_PROJECT,
    newProject: project
  };
};
