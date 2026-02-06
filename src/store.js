// store.js
import { configureStore } from '@reduxjs/toolkit';
import venueReducer from './venueSlice';
import mealsReducer from './mealsSlice';
import avSlice from './avSlice';

export default configureStore({
  reducer: {
    venue: venueReducer,
    meals:mealsReducer,
    av:avSlice
  },
});
