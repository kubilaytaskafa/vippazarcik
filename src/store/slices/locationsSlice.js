import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pickupType: "",
  dropoffType: "",
  pickupPoint: "",
  dropoffPoint: "",
  selectedCar: "",
  selectedHotelRegion: "",
  pickupCity: "",
  dropoffCity: "",
  airports: {
    Antalya: ["Antalya Havalimanı (AYT)", "Gazipaşa Havalimanı (GZP)"],
  },
  hotelRegions: {
    Antalya: {
      Kaleiçi: [
        "Tuvana Hotel",
        "Alp Pasa Boutique Hotel",
        "White Garden Hotel",
        "Hadrian Gate Hotel",
        "Aspen Hotel",
        "Kaleiçi Hotel",
        "Puding Marina Residence",
        "Mediterra Art Hotel",
        "Hotel Alp Pasa",
        "Rixos Downtown Antalya",
      ],
      Konyaaltı: [
        "Rixos Premium Belek",
        "Mardan Palace",
        "Calista Luxury Resort",
        "Titanic Mardan Palace",
        "Regnum Carya",
        "Kempinski Hotel The Dome",
        "Gloria Golf Resort",
        "Gloria Verde Resort",
        "Gloria Serenity Resort",
        "Gloria Sports Arena",
      ],
      Lara: [
        "Rixos Premium Lara",
        "Lara Barut Collection",
        "Calista Luxury Resort",
        "Titanic Mardan Palace",
        "Regnum Carya",
        "Lara Beach Resort",
        "Lara Family Resort",
        "Lara Resort & Spa",
        "Lara Beach Hotel",
        "Lara Hotel",
      ],
      Belek: [
        "Rixos Premium Belek",
        "Mardan Palace",
        "Calista Luxury Resort",
        "Titanic Mardan Palace",
        "Regnum Carya",
        "Gloria Golf Resort",
        "Gloria Verde Resort",
        "Gloria Serenity Resort",
        "Gloria Sports Arena",
        "Gloria Hotels & Resorts",
      ],
      Side: [
        "Rixos Premium Belek",
        "Mardan Palace",
        "Calista Luxury Resort",
        "Titanic Mardan Palace",
        "Regnum Carya",
        "Side Star Resort",
        "Side Beach Resort",
        "Side Family Resort",
        "Side Resort & Spa",
        "Side Hotel",
      ],
      Alanya: [
        "Rixos Premium Belek",
        "Mardan Palace",
        "Calista Luxury Resort",
        "Titanic Mardan Palace",
        "Regnum Carya",
        "Alanya Beach Resort",
        "Alanya Family Resort",
        "Alanya Resort & Spa",
        "Alanya Beach Hotel",
        "Alanya Hotel",
      ],
      Kemer: [
        "Rixos Premium Belek",
        "Mardan Palace",
        "Calista Luxury Resort",
        "Titanic Mardan Palace",
        "Regnum Carya",
        "Kemer Beach Resort",
        "Kemer Family Resort",
        "Kemer Resort & Spa",
        "Kemer Beach Hotel",
        "Kemer Hotel",
      ],
      Manavgat: [
        "Rixos Premium Belek",
        "Mardan Palace",
        "Calista Luxury Resort",
        "Titanic Mardan Palace",
        "Regnum Carya",
        "Manavgat Beach Resort",
        "Manavgat Family Resort",
        "Manavgat Resort & Spa",
        "Manavgat Beach Hotel",
        "Manavgat Hotel",
      ],
      Serik: [
        "Rixos Premium Belek",
        "Mardan Palace",
        "Calista Luxury Resort",
        "Titanic Mardan Palace",
        "Regnum Carya",
        "Serik Beach Resort",
        "Serik Family Resort",
        "Serik Resort & Spa",
        "Serik Beach Hotel",
        "Serik Hotel",
      ],
    },
  },
};

const locationsSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {
    setPickupType: (state, action) => {
      state.pickupType = action.payload;
      state.pickupPoint = "";
    },
    setDropoffType: (state, action) => {
      state.dropoffType = action.payload;
      state.dropoffPoint = "";
    },
    setPickupPoint: (state, action) => {
      state.pickupPoint = action.payload;
    },
    setDropoffPoint: (state, action) => {
      state.dropoffPoint = action.payload;
    },
    setSelectedCar: (state, action) => {
      state.selectedCar = action.payload;
    },
    setSelectedHotelRegion: (state, action) => {
      state.selectedHotelRegion = action.payload;
      state.pickupPoint = "";
      state.dropoffPoint = "";
    },
    setPickupCity: (state, action) => {
      state.pickupCity = action.payload;
      state.pickupPoint = "";
      state.selectedHotelRegion = "";
    },
    setDropoffCity: (state, action) => {
      state.dropoffCity = action.payload;
      state.dropoffPoint = "";
      state.selectedHotelRegion = "";
    },
  },
});

export const {
  setPickupType,
  setDropoffType,
  setPickupPoint,
  setDropoffPoint,
  setSelectedCar,
  setSelectedHotelRegion,
  setPickupCity,
  setDropoffCity,
} = locationsSlice.actions;

export default locationsSlice.reducer;
