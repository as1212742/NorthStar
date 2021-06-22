/** @format */

import Data from "../state_mapping/State_Mapping";

const DataReducer = (state, action) => {
  switch (action.type) {
    case Data.SET_INSTANCE_DETAILS:
      return {
        ...state,
        EksDetails: action.payload,
      };

    case Data.SET_CONFIG:
      return {
        ...state,
        EksConfig: action.payload,
      };

    case Data.SET_REGION:
      return {
        ...state,
        Region: {
          region: action.payload,
        },
      };

    case Data.SET_TEST:
      const newArray = [...state.Test];
      const index = state.Test.findIndex(
        (value) => value.id === action.payload.id
      );
      newArray[index].status = action.payload.value;
      return {
        ...state,
        Test: newArray,
      };

    case Data.SET_SELECTION_TEST:
      return {
        ...state,
        Table_Select: action.payload,
      };

    case Data.RESET:
      return {
        ...state,
        EksConfig: action.payload.EksConfig,
        Region: action.payload.Region,
        EksDetails: action.payload.EksDetails,
      };

    case Data.SET_HELPPANEL:
      return {
        ...state,
        Helppanel: action.payload,
      };

    default:
      return state;
  }
};

export default DataReducer;
