import initState from "../state/initialState";
import { TReduxSearchAction, TReduxState } from "types";

const rootReduces = (state: TReduxState = initState, action: TReduxSearchAction) => {
    switch (action.type) {
      case 'ADD_SEARCH_DATA':
        return {
          ...state,
          searchData: action.value,
        }
      default:
        return state
    }
  }
  
  export default rootReduces;
    