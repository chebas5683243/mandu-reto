import Resources from "./Resources.es.constants";

export const navigationOptions = [
  {
    text: Resources.Dashboard,
    selected: false,
    isMenu: false,
  },
  {
    text: Resources.Organization,
    selected: true,
    isMenu: false,
  },
  {
    text: Resources.Models,
    selected: false,
    isMenu: true,
  },
  {
    text: Resources.FollowUp,
    selected: false,
    isMenu: true,
  }
]