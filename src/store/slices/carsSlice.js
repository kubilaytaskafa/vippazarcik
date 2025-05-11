import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: [
    {
      id: 1,
      name: "Mercedes-Benz Vito",
      type: "VIP Van",
      capacity: 7,
      price: {
        airport: 150,
        city: 100,
        hourly: 80,
      },
      features: ["Klima", "Wi-Fi", "USB Şarj", "Çocuk Koltuğu", "Bagaj Alanı"],
      images: {
        main: "/images/cars/vito-main.jpg",
        gallery: [
          "/images/cars/vito-1.jpg",
          "/images/cars/vito-2.jpg",
          "/images/cars/vito-3.jpg",
        ],
      },
      description: "7 kişilik konforlu VIP transfer aracı",
    },
    {
      id: 2,
      name: "Mercedes-Benz Sprinter",
      type: "VIP Minibus",
      capacity: 15,
      price: {
        airport: 250,
        city: 180,
        hourly: 120,
      },
      features: [
        "Klima",
        "Wi-Fi",
        "USB Şarj",
        "Çocuk Koltuğu",
        "Geniş Bagaj Alanı",
        "Koltuk Isıtma",
      ],
      images: {
        main: "/images/cars/sprinter-main.jpg",
        gallery: [
          "/images/cars/sprinter-1.jpg",
          "/images/cars/sprinter-2.jpg",
          "/images/cars/sprinter-3.jpg",
        ],
      },
      description: "15 kişilik lüks grup transfer aracı",
    },
    {
      id: 3,
      name: "Mercedes-Benz S-Class",
      type: "Luxury Sedan",
      capacity: 3,
      price: {
        airport: 200,
        city: 150,
        hourly: 100,
      },
      features: [
        "Klima",
        "Wi-Fi",
        "USB Şarj",
        "Masajlı Koltuklar",
        "Panoramik Tavan",
        "Ambient Işıklandırma",
      ],
      images: {
        main: "/images/cars/s-class-main.jpg",
        gallery: [
          "/images/cars/s-class-1.jpg",
          "/images/cars/s-class-2.jpg",
          "/images/cars/s-class-3.jpg",
        ],
      },
      description: "3 kişilik lüks sedan araç",
    },
    {
      id: 4,
      name: "BMW 7 Series",
      type: "Luxury Sedan",
      capacity: 3,
      price: {
        airport: 180,
        city: 140,
        hourly: 90,
      },
      features: [
        "Klima",
        "Wi-Fi",
        "USB Şarj",
        "Masajlı Koltuklar",
        "Panoramik Tavan",
        "Ambient Işıklandırma",
      ],
      images: {
        main: "/images/cars/bmw7-main.jpg",
        gallery: [
          "/images/cars/bmw7-1.jpg",
          "/images/cars/bmw7-2.jpg",
          "/images/cars/bmw7-3.jpg",
        ],
      },
      description: "3 kişilik lüks sedan araç",
    },
  ],
  selectedCar: null,
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setSelectedCar: (state, action) => {
      state.selectedCar = action.payload;
    },
  },
});

export const { setSelectedCar } = carsSlice.actions;
export default carsSlice.reducer;
