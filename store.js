/* eslint-disable  */
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  count: 0
};

const reducer = (state = initialState, action) => {
  console.log(action.payload);

  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: action.payload
      };

    default:
      return state;
  }
};

export const initializeStore = (preloadedState = initialState) => {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  );
};
