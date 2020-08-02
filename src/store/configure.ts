import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { reducer as gridReducer, namespace as gridNamespace } from './modules/grid';

export default () => configureStore({
  reducer: combineReducers({
    [gridNamespace]: gridReducer,
  }),
});
