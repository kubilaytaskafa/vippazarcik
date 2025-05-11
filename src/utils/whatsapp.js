export const sendWhatsAppMessage = (message) => {
  const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER;

  if (!phoneNumber) {
    console.error("WhatsApp numarası bulunamadı!");
    return;
  }

  // WhatsApp API URL'sini oluştur
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  // Yeni sekmede WhatsApp'ı aç
  window.open(whatsappUrl, "_blank");
};
