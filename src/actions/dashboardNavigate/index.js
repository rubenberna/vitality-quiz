import { SET_DASHBOARD_NAVIGATE } from "../types";


  export const dashboardNavigateAction = (name,data) => {
  return {
    type: SET_DASHBOARD_NAVIGATE,
    payload: {name,data}
  };
}
