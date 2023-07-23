import React, { useState, useEffect, createContext, useReducer } from "react";

import { initState, reducer } from "./Recipes/reducer";

const Context = createContext();

function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);
  const { isLoading, isError, recipes, totalPages } = state;

  return (
    <Context.Provider
      value={{ isLoading, isError, recipes, totalPages, dispatch }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
