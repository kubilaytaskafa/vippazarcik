import React from "react";
import { useTranslation } from "react-i18next";
import ReservationForm from "../components/ReservationForm";
import ScrollToTopButton from "../components/ScrollToTopButton";

const Reservation = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          {t("reservation.title")}
        </h1>
        <ReservationForm />
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default Reservation;
