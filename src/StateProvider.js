import React, { createContext, useContext, useReducer } from "react";

//prepares the datalayout using redux

export const StateContext = createContext();

//wrap the app and provide the datalayer to every compponent inside the app
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//pull information from the data layer
export const useStateValue = () => useContext(StateContext);
