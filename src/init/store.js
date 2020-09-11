// Core
import { createStore, applyMiddleware } from 'redux';

//Instruments
import { rootReducer } from './rootReducer';
import {
  middleware,
  composeEnchancers,
} from './middleware';

export const store = createStore(
  rootReducer,
  composeEnchancers(applyMiddleware(...middleware))
);
