export const SITE = {
    name: "Dale Delivery",
    url: "https://www.systemfailed.tech/",
    defaultLang: "es",
    logo: "/logo.png",
    defaultImage: "/logo.png",
};

export const SEO = {
    defaultTitle: "Dale Delivery | Courier rápido y directo a tu casa",
    defaultDescription:
        "Tu servicio de delivery y courier confiable. Entregamos paquetes exprés directo a tu casa con rapidez, seguridad y confianza.",
    defaultKeywords:
        "delivery, dale delivery, courier, directo a tu casa, mensajería, logística, envíos rápidos, servicio exprés, paquetería segura",
};
// 🌍 Idiomas soportados para SEO internacional
export const LANGS = [
    {code: "es", url: SITE.url + "es/"}, // Español por defecto
    {code: "en", url: SITE.url + "en/"}, // Inglés
    {code: "pt", url: SITE.url + "pt/"}, // Portugués
];