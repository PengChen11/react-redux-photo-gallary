import { createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import photosReducer from './photosReducer.js';
import settingsReducer from './settingsReducer.js';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  photosStore: photosReducer,
  settingsStore: settingsReducer,
});
// thunk, apply middleware are new
export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));