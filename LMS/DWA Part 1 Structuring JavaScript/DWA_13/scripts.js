import {  configureStore } from "@reduxjs/toolkit";

// Actions
const ADD = 'ADD';
const SUBTRACT = 'SUBTRACT';
const RESET = 'RESET';

const store = configureStore(counterReducer);


// Reducer
function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case ADD:
      return { count: state.count + 1 };
    case SUBTRACT:
      return { count: state.count - 1 };
    case RESET:
      return { count: 0 };
    default:
      return state;
  }
}


// Subscriber (Console Logger)
function subLogger() {
  const newState = store.getState();
  console.log('New state:', newState);
}

// Subscribe the console logger to the store
store.subscribe(subLogger);

// Scenario 1: Increment the counter by one
console.log('Scenario 1:');
console.log('Initial state:', store.getState());

// Scenario 2: Increment the counter by one
console.log('Scenario 2:');
store.dispatch({ type: ADD });
store.dispatch({ type: ADD });


// Scenario 3: Increment the counter by one
console.log('Scenario 3:');
store.dispatch({ type: SUBTRACT });


// Scenario 4: Resetting the Tally Counter
console.log('Scenario 4:');
store.dispatch({ type: RESET });

