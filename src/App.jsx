import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./routes";
import { Helmet } from "react-helmet-async";

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Sayfa yüklendiğinde dil değişikliğini uygula
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <Router>
      <Helmet>
        <html lang={i18n.language} />
        <title>{t("meta.title.full")}</title>
        <meta name="description" content={t("meta.description")} />
        <meta name="keywords" content={t("meta.keywords")} />
        <meta property="og:title" content={t("meta.title.full")} />
        <meta property="og:description" content={t("meta.description")} />
        <meta property="twitter:title" content={t("meta.title.full")} />
        <meta property="twitter:description" content={t("meta.description")} />
        <meta
          property="og:locale"
          content={`${i18n.language}_${i18n.language.toUpperCase()}`}
        />
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
