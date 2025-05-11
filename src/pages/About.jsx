import { useTranslation } from "react-i18next";
import { FaCheckCircle } from "react-icons/fa";

function About() {
  const { t } = useTranslation();

  const features = [
    t("about.features.quality", "Yüksek kaliteli hizmet"),
    t("about.features.safety", "Güvenli ve konforlu seyahat"),
    t("about.features.professional", "Profesyonel sürücüler"),
    t("about.features.fleet", "Modern araç filosu"),
    t("about.features.support", "7/24 müşteri desteği"),
    t("about.features.experience", "20 yıllık sektör deneyimi"),
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          {t("about.title", "Hakkımızda")}
        </h1>

        <div className="prose prose-lg mx-auto mb-12">
          <p className="text-gray-600 text-center mb-8">
            {t(
              "about.description",
              "VipPazarCik olarak, 20 yılı aşkın süredir VIP transfer hizmetleri sunuyoruz. Müşterilerimize en kaliteli ve güvenilir hizmeti sunmak için çalışıyoruz."
            )}
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">
            {t("about.whyUs", "Neden Biz?")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <FaCheckCircle className="text-primary" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">
            {t("about.mission", "Misyonumuz")}
          </h2>
          <p className="text-gray-600">
            {t(
              "about.missionText",
              "Müşterilerimize en kaliteli ve güvenilir VIP transfer hizmetini sunmak, seyahatlerini konforlu ve keyifli hale getirmek için çalışıyoruz."
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
