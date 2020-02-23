import { SET_DASHBOARD_NAVIGATE } from "../../actions/types";

export function dashboardNavigateReducer(
  state = {name:"dashboard"},
  action
) {
  switch (action.type) {
    case SET_DASHBOARD_NAVIGATE:
      return { ...state, name:action.payload.name,data:action.payload.data };
    default:
      return state;
  }
}
