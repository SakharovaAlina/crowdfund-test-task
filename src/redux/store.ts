import { compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import modalDonate from 'src/redux/modalDonate';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;
export default configureStore({
  reducer: {
    donator: modalDonate,
  },
  enhancers: composeEnhancers,
});
