import { configureStore } from "@reduxjs/toolkit";
import locationsReducer from "./slices/locationsSlice";
import reservationReducer from "./slices/reservationSlice";
import carsReducer from "./slices/carsSlice";

const store = configureStore({
  reducer: {
    locations: locationsReducer,
    reservation: reservationReducer,
    cars: carsReducer,
  },
});

export default store;
