import { configureStore } from '@reduxjs/toolkit';
import navReducer from './reducers/navReducer';

const store = configureStore({
  reducer: {
    navReducer,
  },
});

export default store;
