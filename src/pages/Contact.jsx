import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { sendWhatsAppMessage } from "../utils/whatsapp";
import ScrollToTopButton from "../components/ScrollToTopButton";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // WhatsApp mesajını oluştur
    const message = `
*Yeni İletişim Formu Mesajı*

*Gönderen Bilgileri:*
- İsim: ${formData.name}
- E-posta: ${formData.email}
- Telefon: ${formData.phone}

*Mesaj:*
${formData.message}
    `.trim();

    // WhatsApp mesajını gönder
    sendWhatsAppMessage(message);
  };

  const contactInfo = [
    {
      icon: <FaPhone className="text-2xl text-primary" />,
      title: t("contact.phone.title", "Telefon"),
      content: "+90 555 123 4567",
    },
    {
      icon: <FaEnvelope className="text-2xl text-primary" />,
      title: t("contact.email.title", "E-posta"),
      content: "info@vippazarcik.com",
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl text-primary" />,
      title: t("contact.address.title", "Adres"),
      content: t("contact.address.content", "İstanbul, Türkiye"),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-center mb-12">
        {t("contact.title", "İletişim")}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {contactInfo.map((info, index) => (
          <div key={index} className="text-center p-6 rounded-lg shadow-lg">
            <div className="mb-4">{info.icon}</div>
            <h3 className="text-xl font-bold mb-2">{info.title}</h3>
            <p className="text-gray-600">{info.content}</p>
          </div>
        ))}
      </div>

      <div className="max-w-2xl mx-auto">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 mb-2">
              {t("contact.form.name", "Ad Soyad")}
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">
              {t("contact.form.email", "E-posta")}
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">
              {t("contact.form.phone", "Telefon")}
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">
              {t("contact.form.message", "Mesaj")}
            </label>
            <textarea
              rows="4"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            {t("contact.form.submit", "Gönder")}
          </button>
        </form>
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default Contact;
