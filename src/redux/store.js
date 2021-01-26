// import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactReducer from './reducer';
import { configureStore } from '@reduxjs/toolkit';

///=====ШАГ №1 - ванильный Redux
// const reducer = combineReducers({
//   contacts: contactReducer,
// });
// const store = createStore(reducer, composeWithDevTools());

const store = configureStore({ reducer: { contacts: contactReducer } });

export default store;
