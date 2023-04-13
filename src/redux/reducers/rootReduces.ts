import { TReduxRootState } from "types";
import initState from "../state/initialState";

const rootReduces = (state: TReduxRootState = initState, action: any) => {
    switch (action.type) {
      case 'ADD_SEARCH_DATA':        
        return {
          ...state,
          searchData: action.value,
        };
      case "LOAD_DATA_TO_STORE": 
        return {
          ...state,
          searchResult: action.searchData,
        };      
      default:
        return state
    }
  }
  
  export default rootReduces;
    