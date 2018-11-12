import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const exampleInitialState = {
  message: 'Hello from redux'
};

export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export function initializeStore(initialState = exampleInitialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  );
}
