import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import { en } from "./en";
import { cz } from "./cz";

i18next.use(initReactI18next).init({
  resources: {
    en,
    cz,
  },
  lng: "en",
  interpolation: {
    escapeValue: true,
  },
});

export default i18next;
