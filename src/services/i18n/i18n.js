import pt from "./locales/pt.json"
import en from "./locales/en.json"
import de from "./locales/de.json"
import jp from "./locales/jp.json"
const LanguageDetector = {
    type: "LanguageDetector",
    async: true,
    detect: (cb) => {
        return Expo.Util.getCurrentLocaleAsync()
            .then(lng => { cb(lng); })
    },
    init: () => { },
    chacheUserLanguege: () => { }
}

i18n
    .use(LanguageDetector)
    .init({
        fallbackLng: "en",
        resources: {
            pt: {translation: pt},
            en: {translation: en},
            de: {translation: de},
            jp: {translation: jp},
            ns: ["translation"],
            defaultNS: "translation",
        }
    })

export default i18n