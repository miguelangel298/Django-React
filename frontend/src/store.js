import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import recoveryReducer from './reducers/recoveryReducer.js';

const rootReducer = combineReducers({
  recovery: recoveryReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));