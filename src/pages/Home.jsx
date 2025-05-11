import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  FaPlane,
  FaHotel,
  FaCar,
  FaGlassCheers,
  FaChevronRight,
} from "react-icons/fa";
import ReservationForm from "../components/ReservationForm";
import CarGallery from "../components/CarGallery";

const Home = () => {
  const { t } = useTranslation();
  const cars = useSelector((state) => state.cars.cars);

  const handleReservationSubmit = (formData) => {
    console.log("Reservation form data:", formData);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-primary/90 to-primary">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center mix-blend-overlay" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-4">{t("home.hero.title")}</h1>
            <p className="text-xl mb-8">{t("home.hero.description")}</p>
            <Link
              to="/reservation"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              {t("home.hero.cta")}
              <FaChevronRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Reservation Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              {t("reservation.form.title")}
            </h2>
            <ReservationForm onSubmit={handleReservationSubmit} />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("home.services.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaPlane className="text-2xl text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t("home.services.airport")}
              </h3>
              <p className="text-gray-600">
                {t("services.airport.description")}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHotel className="text-2xl text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t("home.services.hotel")}
              </h3>
              <p className="text-gray-600">{t("services.hotel.description")}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCar className="text-2xl text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t("home.services.vip")}
              </h3>
              <p className="text-gray-600">{t("services.vip.description")}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaGlassCheers className="text-2xl text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t("home.services.wedding")}
              </h3>
              <p className="text-gray-600">
                {t("services.wedding.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Car Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("cars.title")}
          </h2>
          <CarGallery />
        </div>
      </section>

      {/* Cars Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">{t("home.cars.title")}</h2>
            <Link
              to="/cars"
              className="text-primary hover:text-primary/80 flex items-center"
            >
              {t("home.cars.viewAll")}
              <FaChevronRight className="ml-2" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.slice(0, 3).map((car) => (
              <div
                key={car.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
                  <p className="text-gray-600 mb-4">
                    {car.capacity} {t("home.cars.passengers")}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {car.features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t("home.cta.title")}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t("home.cta.description")}
          </p>
          <Link
            to="/contact"
            className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            {t("header.contact")}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
