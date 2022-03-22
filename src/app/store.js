import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import gridReducers from '../features/Grid/reducer';

let rootReducers = combineReducers({
  grid: gridReducers,
});

// Membuat compose enhancers untuk redux devtools
const composeEnhancers = window.__REDUX_DEVTOOL_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
