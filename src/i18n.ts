import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpBackend) // carrega traduções usando http (pode ser substituído para carregar de arquivos locais)
  .use(LanguageDetector) // detecta o idioma
  .use(initReactI18next) // passa i18n para react-i18next
  .init({
    fallbackLng: "pt", // linguagem padrão
    debug: true, // mostra informações de debug no console
    detection: {
      order: [
        "queryString",
        "cookie",
        "localStorage",
        "sessionStorage",
        "navigator",
        "htmlTag",
        "path",
        "subdomain",
      ],
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // caminho para as traduções
    },
  });

export default i18n;
