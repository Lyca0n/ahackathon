import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import aboutReducer from '../reducers/about';
import faqReducer from '../reducers/faq';
import eventsReducer from '../reducers/event';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({      
      about: aboutReducer,
      faqs: faqReducer,
      events: eventsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
