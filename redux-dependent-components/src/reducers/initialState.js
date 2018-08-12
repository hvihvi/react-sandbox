// Teams
const TEAM_A = "A";
const TEAM_B = "B";
const TEAM_C = "C";
// Types
const FEATURE = "Feature";
const BUG = "Bug";
// Projects
const PROJECT_1 = "Project 1";
const PROJECT_2 = "Project 2";
const PROJECT_3 = "Project 3";

export default {
  todos: [
    {
      id: 1,
      title: "title 1",
      team: TEAM_A,
      type: FEATURE,
      project: PROJECT_1
    },
    {
      id: 2,
      title: "title 2",
      team: TEAM_B,
      type: FEATURE,
      project: PROJECT_1
    },
    {
      id: 3,
      title: "title 3",
      team: TEAM_C,
      type: FEATURE,
      project: PROJECT_1
    },
    {
      id: 4,
      title: "title 4",
      team: TEAM_A,
      type: FEATURE,
      project: PROJECT_2
    },
    {
      id: 5,
      title: "title 5",
      team: TEAM_A,
      type: FEATURE,
      project: PROJECT_2
    },
    {
      id: 6,
      title: "title 6",
      team: TEAM_A,
      type: BUG,
      project: PROJECT_2
    },
    {
      id: 7,
      title: "title 7",
      team: TEAM_B,
      type: FEATURE,
      project: PROJECT_2
    },
    {
      id: 8,
      title: "title 8",
      team: TEAM_A,
      type: BUG,
      project: PROJECT_2
    },
    {
      id: 9,
      title: "title 9",
      team: TEAM_A,
      type: BUG,
      project: PROJECT_3
    },
    {
      id: 10,
      title: "title 10",
      team: TEAM_C,
      type: BUG,
      project: PROJECT_3
    }
  ]
};
