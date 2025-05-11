import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaClock,
} from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Üst Kısım */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Şirket Bilgileri */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">
              {t("company.name")}
            </h3>
            <p className="text-gray-400">{t("home.hero.description")}</p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="https://wa.me/905551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <FaWhatsapp className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-primary">
              {t("header.services")}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-primary transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  {t("services.airport.title")}
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-primary transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  {t("services.hotel.title")}
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-primary transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  {t("services.vip.title")}
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-primary transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  {t("services.wedding.title")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Araçlar */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-primary">
              {t("header.cars")}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/cars"
                  className="text-gray-400 hover:text-primary transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  {t("reservation.carTypes.sedan")}
                </Link>
              </li>
              <li>
                <Link
                  to="/cars"
                  className="text-gray-400 hover:text-primary transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  {t("reservation.carTypes.suv")}
                </Link>
              </li>
              <li>
                <Link
                  to="/cars"
                  className="text-gray-400 hover:text-primary transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  {t("reservation.carTypes.minibus")}
                </Link>
              </li>
              <li>
                <Link
                  to="/cars"
                  className="text-gray-400 hover:text-primary transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  {t("reservation.carTypes.van")}
                </Link>
              </li>
            </ul>
          </div>

          {/* İletişim Bilgileri */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-primary">
              {t("contact.title")}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FaPhone className="text-primary mt-1" />
                <div>
                  <p className="text-gray-400">{t("contact.info.phone")}</p>
                  <a
                    href="tel:+905551234567"
                    className="text-white hover:text-primary transition-colors"
                  >
                    +90 555 123 4567
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <FaEnvelope className="text-primary mt-1" />
                <div>
                  <p className="text-gray-400">{t("contact.info.email")}</p>
                  <a
                    href="mailto:info@vippazarcik.com"
                    className="text-white hover:text-primary transition-colors"
                  >
                    info@vippazarcik.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-primary mt-1" />
                <div>
                  <p className="text-gray-400">{t("contact.info.address")}</p>
                  <p className="text-white">Antalya, Türkiye</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <FaClock className="text-primary mt-1" />
                <div>
                  <p className="text-gray-400">Çalışma Saatleri</p>
                  <p className="text-white">7/24 Hizmet</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Alt Kısım */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} {t("company.name")}.{" "}
              {t("contact.info.rights")}
            </p>
            <div className="flex space-x-6">
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-primary transition-colors text-sm"
              >
                Gizlilik Politikası
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-primary transition-colors text-sm"
              >
                Kullanım Şartları
              </Link>
              <Link
                to="/cookies"
                className="text-gray-400 hover:text-primary transition-colors text-sm"
              >
                Çerez Politikası
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
