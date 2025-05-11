import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { FaUsers, FaCar, FaWifi, FaSnowflake, FaChild } from "react-icons/fa";

function Cars() {
  const { t } = useTranslation();
  const cars = useSelector((state) => state.cars.cars);

  const getFeatureIcon = (feature) => {
    switch (feature) {
      case "Klima":
        return <FaSnowflake className="w-5 h-5" />;
      case "Wi-Fi":
        return <FaWifi className="w-5 h-5" />;
      case "Çocuk Koltuğu":
        return <FaChild className="w-5 h-5" />;
      default:
        return <FaCar className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">
          {t("cars.title", "Filo Araçlarımız")}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              <div className="relative h-64">
                <img
                  src={car.images.main}
                  alt={car.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h2 className="text-white text-2xl font-semibold">
                    {car.name}
                  </h2>
                  <p className="text-gray-200">{car.type}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600">
                    {t("cars.capacity", "Kapasite")}: {car.capacity}
                  </span>
                  <span className="text-primary font-semibold text-xl">
                    {car.price.airport}€
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{car.description}</p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h3 className="font-semibold mb-2">
                      {t("cars.features", "Özellikler")}
                    </h3>
                    <ul className="space-y-2">
                      {car.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center text-gray-600"
                        >
                          <span className="mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">
                      {t("cars.prices", "Fiyatlar")}
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between text-gray-600">
                        <span>{t("cars.airport", "Havalimanı")}</span>
                        <span>{car.price.airport}€</span>
                      </li>
                      <li className="flex justify-between text-gray-600">
                        <span>{t("cars.hotel", "Otel")}</span>
                        <span>{car.price.hotel}€</span>
                      </li>
                      <li className="flex justify-between text-gray-600">
                        <span>{t("cars.port", "Liman")}</span>
                        <span>{car.price.port}€</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {car.images.gallery.map((image, index) => (
                    <div key={index} className="relative h-24">
                      <img
                        src={image}
                        alt={`${car.name} - ${index + 1}`}
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cars;
