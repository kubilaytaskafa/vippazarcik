import { useTranslation } from "react-i18next";
import { FaPlane, FaHotel, FaCarSide, FaUserFriends } from "react-icons/fa";
import ScrollToTopButton from "../components/ScrollToTopButton";

function Services() {
  const { t } = useTranslation();

  const services = [
    {
      icon: <FaPlane className="text-4xl text-primary" />,
      title: t("services.airport.title", "Havaalanı Transferi"),
      description: t(
        "services.airport.description",
        "Havaalanından şehir merkezine veya otellerinize konforlu transfer"
      ),
    },
    {
      icon: <FaHotel className="text-4xl text-primary" />,
      title: t("services.hotel.title", "Otel Transferi"),
      description: t(
        "services.hotel.description",
        "Oteller arası veya şehir içi transfer hizmeti"
      ),
    },
    {
      icon: <FaCarSide className="text-4xl text-primary" />,
      title: t("services.private.title", "Özel Transfer"),
      description: t(
        "services.private.description",
        "Özel günleriniz için lüks araç kiralama hizmeti"
      ),
    },
    {
      icon: <FaUserFriends className="text-4xl text-primary" />,
      title: t("services.group.title", "Grup Transferi"),
      description: t(
        "services.group.description",
        "Toplu transfer hizmetleri için özel araçlar"
      ),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-center mb-12">
        {t("services.title", "Hizmetlerimiz")}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex-shrink-0">{service.icon}</div>
            <div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      <ScrollToTopButton />
    </div>
  );
}

export default Services;
