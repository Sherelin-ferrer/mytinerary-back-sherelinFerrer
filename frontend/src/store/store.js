import { configureStore } from '@reduxjs/toolkit';
import cityReducer from './citySlice';
import itineraryReducer from './itinerarySlice';

const store = configureStore({
  reducer: {
    cities: cityReducer,
    itineraries: itineraryReducer
  }
});

export default store;
