import { createSlice } from "@reduxjs/toolkit";
import i18n from "../../i18n";

const getTranslatedLocations = () => {
  const { t } = i18n;
  return {
    airports: {
      Antalya: [
        t("locations.airports.antalya.ayt", "Antalya Havalimanı (AYT)"),
        t("locations.airports.antalya.gzp", "Gazipaşa Havalimanı (GZP)"),
      ],
    },
    hotelRegions: {
      Antalya: {
        [t("locations.regions.kaleici", "Kaleiçi")]: [
          t("locations.hotels.kaleici.tuvana", "Tuvana Hotel"),
          t("locations.hotels.kaleici.alpPasa", "Alp Pasa Boutique Hotel"),
          t("locations.hotels.kaleici.whiteGarden", "White Garden Hotel"),
          t("locations.hotels.kaleici.hadrianGate", "Hadrian Gate Hotel"),
          t("locations.hotels.kaleici.aspen", "Aspen Hotel"),
          t("locations.hotels.kaleici.kaleici", "Kaleiçi Hotel"),
          t("locations.hotels.kaleici.pudingMarina", "Puding Marina Residence"),
          t("locations.hotels.kaleici.mediterra", "Mediterra Art Hotel"),
          t("locations.hotels.kaleici.alpPasa", "Hotel Alp Pasa"),
          t("locations.hotels.kaleici.rixos", "Rixos Downtown Antalya"),
        ],
        [t("locations.regions.konyaalti", "Konyaaltı")]: [
          t("locations.hotels.konyaalti.rixos", "Rixos Premium Belek"),
          t("locations.hotels.konyaalti.mardan", "Mardan Palace"),
          t("locations.hotels.konyaalti.calista", "Calista Luxury Resort"),
          t("locations.hotels.konyaalti.titanic", "Titanic Mardan Palace"),
          t("locations.hotels.konyaalti.regnum", "Regnum Carya"),
          t("locations.hotels.konyaalti.kempinski", "Kempinski Hotel The Dome"),
          t("locations.hotels.konyaalti.gloriaGolf", "Gloria Golf Resort"),
          t("locations.hotels.konyaalti.gloriaVerde", "Gloria Verde Resort"),
          t(
            "locations.hotels.konyaalti.gloriaSerenity",
            "Gloria Serenity Resort"
          ),
          t("locations.hotels.konyaalti.gloriaSports", "Gloria Sports Arena"),
        ],
        [t("locations.regions.lara", "Lara")]: [
          t("locations.hotels.lara.rixos", "Rixos Premium Lara"),
          t("locations.hotels.lara.barut", "Lara Barut Collection"),
          t("locations.hotels.lara.calista", "Calista Luxury Resort"),
          t("locations.hotels.lara.titanic", "Titanic Mardan Palace"),
          t("locations.hotels.lara.regnum", "Regnum Carya"),
          t("locations.hotels.lara.beach", "Lara Beach Resort"),
          t("locations.hotels.lara.family", "Lara Family Resort"),
          t("locations.hotels.lara.spa", "Lara Resort & Spa"),
          t("locations.hotels.lara.beachHotel", "Lara Beach Hotel"),
          t("locations.hotels.lara.hotel", "Lara Hotel"),
        ],
        [t("locations.regions.belek", "Belek")]: [
          t("locations.hotels.belek.rixos", "Rixos Premium Belek"),
          t("locations.hotels.belek.mardan", "Mardan Palace"),
          t("locations.hotels.belek.calista", "Calista Luxury Resort"),
          t("locations.hotels.belek.titanic", "Titanic Mardan Palace"),
          t("locations.hotels.belek.regnum", "Regnum Carya"),
          t("locations.hotels.belek.gloriaGolf", "Gloria Golf Resort"),
          t("locations.hotels.belek.gloriaVerde", "Gloria Verde Resort"),
          t("locations.hotels.belek.gloriaSerenity", "Gloria Serenity Resort"),
          t("locations.hotels.belek.gloriaSports", "Gloria Sports Arena"),
          t("locations.hotels.belek.gloriaHotels", "Gloria Hotels & Resorts"),
        ],
        [t("locations.regions.side", "Side")]: [
          t("locations.hotels.side.rixos", "Rixos Premium Belek"),
          t("locations.hotels.side.mardan", "Mardan Palace"),
          t("locations.hotels.side.calista", "Calista Luxury Resort"),
          t("locations.hotels.side.titanic", "Titanic Mardan Palace"),
          t("locations.hotels.side.regnum", "Regnum Carya"),
          t("locations.hotels.side.star", "Side Star Resort"),
          t("locations.hotels.side.beach", "Side Beach Resort"),
          t("locations.hotels.side.family", "Side Family Resort"),
          t("locations.hotels.side.spa", "Side Resort & Spa"),
          t("locations.hotels.side.hotel", "Side Hotel"),
        ],
        [t("locations.regions.alanya", "Alanya")]: [
          t("locations.hotels.alanya.rixos", "Rixos Premium Belek"),
          t("locations.hotels.alanya.mardan", "Mardan Palace"),
          t("locations.hotels.alanya.calista", "Calista Luxury Resort"),
          t("locations.hotels.alanya.titanic", "Titanic Mardan Palace"),
          t("locations.hotels.alanya.regnum", "Regnum Carya"),
          t("locations.hotels.alanya.beach", "Alanya Beach Resort"),
          t("locations.hotels.alanya.family", "Alanya Family Resort"),
          t("locations.hotels.alanya.spa", "Alanya Resort & Spa"),
          t("locations.hotels.alanya.beachHotel", "Alanya Beach Hotel"),
          t("locations.hotels.alanya.hotel", "Alanya Hotel"),
        ],
        [t("locations.regions.kemer", "Kemer")]: [
          t("locations.hotels.kemer.rixos", "Rixos Premium Belek"),
          t("locations.hotels.kemer.mardan", "Mardan Palace"),
          t("locations.hotels.kemer.calista", "Calista Luxury Resort"),
          t("locations.hotels.kemer.titanic", "Titanic Mardan Palace"),
          t("locations.hotels.kemer.regnum", "Regnum Carya"),
          t("locations.hotels.kemer.beach", "Kemer Beach Resort"),
          t("locations.hotels.kemer.family", "Kemer Family Resort"),
          t("locations.hotels.kemer.spa", "Kemer Resort & Spa"),
          t("locations.hotels.kemer.beachHotel", "Kemer Beach Hotel"),
          t("locations.hotels.kemer.hotel", "Kemer Hotel"),
        ],
        [t("locations.regions.manavgat", "Manavgat")]: [
          t("locations.hotels.manavgat.rixos", "Rixos Premium Belek"),
          t("locations.hotels.manavgat.mardan", "Mardan Palace"),
          t("locations.hotels.manavgat.calista", "Calista Luxury Resort"),
          t("locations.hotels.manavgat.titanic", "Titanic Mardan Palace"),
          t("locations.hotels.manavgat.regnum", "Regnum Carya"),
          t("locations.hotels.manavgat.beach", "Manavgat Beach Resort"),
          t("locations.hotels.manavgat.family", "Manavgat Family Resort"),
          t("locations.hotels.manavgat.spa", "Manavgat Resort & Spa"),
          t("locations.hotels.manavgat.beachHotel", "Manavgat Beach Hotel"),
          t("locations.hotels.manavgat.hotel", "Manavgat Hotel"),
        ],
        [t("locations.regions.serik", "Serik")]: [
          t("locations.hotels.serik.rixos", "Rixos Premium Belek"),
          t("locations.hotels.serik.mardan", "Mardan Palace"),
          t("locations.hotels.serik.calista", "Calista Luxury Resort"),
          t("locations.hotels.serik.titanic", "Titanic Mardan Palace"),
          t("locations.hotels.serik.regnum", "Regnum Carya"),
          t("locations.hotels.serik.beach", "Serik Beach Resort"),
          t("locations.hotels.serik.family", "Serik Family Resort"),
          t("locations.hotels.serik.spa", "Serik Resort & Spa"),
          t("locations.hotels.serik.beachHotel", "Serik Beach Hotel"),
          t("locations.hotels.serik.hotel", "Serik Hotel"),
        ],
      },
    },
  };
};

const initialState = {
  pickupType: "",
  dropoffType: "",
  pickupPoint: "",
  dropoffPoint: "",
  selectedCar: "",
  selectedHotelRegion: "",
  pickupCity: "",
  dropoffCity: "",
  ...getTranslatedLocations(),
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
    updateLocations: (state) => {
      const { airports, hotelRegions } = getTranslatedLocations();
      state.airports = airports;
      state.hotelRegions = hotelRegions;
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
  updateLocations,
} = locationsSlice.actions;

export default locationsSlice.reducer;
