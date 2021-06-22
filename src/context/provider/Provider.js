/** @format */

import React, { useState, createContext, useReducer } from "react";
import DataReducer from "../reducer/Reducer";
import InitialState from "../initial_state/Initialise_State";
import Mapping_Type from "../state_mapping/State_Mapping";

export const DataContext = createContext({
  ...InitialState,
});

export const DataProvider = (props) => {
  const [DataState, Datadispatch] = useReducer(DataReducer, InitialState);

  const SetInstanceDetails = (data) => {
    Datadispatch({
      type: Mapping_Type.SET_INSTANCE_DETAILS,
      payload: data,
    });
  };

  const SetConfigDetails = (data) => {
    Datadispatch({
      type: Mapping_Type.SET_CONFIG,
      payload: data,
    });
  };

  const SetRegion = (region) => {
    Datadispatch({
      type: Mapping_Type.SET_REGION,
      payload: region,
    });
  };

  const Reset = () => {
    Datadispatch({
      type: Mapping_Type.RESET,
      payload: {
        EksDetails: {
          Pods: null,
          CPU: null,
          Memory: null,
        },
        EksConfig: {
          Storage: { value: "1", label: "EBS Provisioned IOPS SSD (io2)" },
          Processor: { value: "1", label: "General purpose" },
          Network: { value: "1", label: "AWS Graviton2" },
        },
        Region: {
          region: "US East (Ohio)	us-east-2",
        },
      },
    });
  };

  const SetTest = (data) => {
    Datadispatch({
      type: Mapping_Type.SET_TEST,
      payload: data,
    });
  };

  const SetTableSelection = (data) => {
    Datadispatch({
      type: Mapping_Type.SET_SELECTION_TEST,
      payload: data,
    });
  };

  const SetHelppanel = (data) => {
    Datadispatch({
      type: Mapping_Type.SET_HELPPANEL,
      payload: data,
    });
  };
  return (
    <DataContext.Provider
      value={{
        DataState,
        SetInstanceDetails,
        SetConfigDetails,
        SetRegion,
        Reset,
        SetTest,
        SetTableSelection,
        SetHelppanel,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
