import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pickupDate: "",
  pickupTime: "",
  passengers: 1,
  luggage: 1,
  notes: "",
  isSubmitting: false,
  error: null,
};

const reservationSlice = createSlice({
  name: "reservation",
  initialState,
  reducers: {
    setPickupDate: (state, action) => {
      state.pickupDate = action.payload;
    },
    setPickupTime: (state, action) => {
      state.pickupTime = action.payload;
    },
    setPassengers: (state, action) => {
      state.passengers = action.payload;
    },
    setLuggage: (state, action) => {
      state.luggage = action.payload;
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setSubmitting: (state, action) => {
      state.isSubmitting = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    resetForm: (state) => {
      return initialState;
    },
  },
});

export const {
  setPickupDate,
  setPickupTime,
  setPassengers,
  setLuggage,
  setNotes,
  setSubmitting,
  setError,
  resetForm,
} = reservationSlice.actions;

export default reservationSlice.reducer;
