const languegeDetextor = {
    type: "languageDetector",
    async: true,
    detect: (cb) => {
        return Expo.Util.getCurrentLocaleAsync()
            .then(lng => { cb(lng); })
    },
    init: () => { },
    chacheUserLanguege: () => { }
}

i18n.use(languegeDetextor).init({
    fallbackLng: "en",
    resources: {
        en: {
            home: {
                title: "welcome"
            }
        },
        pt: {
            home: {
                title: "Bem-vindo"
            }
        },
        ns: ["translation"],
        defaultNS: "translation",
    }
})

export default i18n