import { createStore, combineReducers } from "redux";
import { produce } from "immer";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return produce(state, (draft) => {
        draft.counter++;
      });
    case "DECREMENT":
      return produce(state, (draft) => {
        draft.counter--;
      });
    default:
      return state;
  }
};

export const store = createStore(
  combineReducers({ reducer }),
  composeWithDevTools(
    // other store enhancers if any
  )
);

export const increment = () => store.dispatch({ type: "INCREMENT" });
// { counter: 1 }

export const decrement = () => store.dispatch({ type: "DECREMENT" });
// { counter: 0 }
