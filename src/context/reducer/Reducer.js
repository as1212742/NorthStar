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

    case Data.RESET:
      return {
        ...state,
        EksConfig: action.payload.EksConfig,
        Region: action.payload.Region,
        EksDetails: action.payload.EksDetails,
      };
    default:
      return state;
  }
};

export default DataReducer;
