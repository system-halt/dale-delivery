export const SITE = {
    name: "Dale Delivery",
    url: "https://www.daledelivey.com/",
    defaultLang: "es",
    logo: "/favicon.svg",
    defaultImage: "/favicon.svg",
    address: "Lima",
    postalCode: "15001",
    streetAddress: "Av. Mariano Cornejo 1848, Pueblo Libre, Peru, 15084",
};

export const SEO = {
    defaultTitle: "Dale Delivery | Courier rápido y directo a tu casa",
    defaultDescription:
        "Tu servicio de delivery y courier confiable. Entregamos paquetes exprés directo a tu casa con rapidez, seguridad y confianza.",
    defaultKeywords:
        "delivery, dale delivery, courier, directo a tu casa, mensajería, logística, envíos rápidos, servicio exprés, paquetería segura, lima, peru",
};
// 🌍 Idiomas soportados para SEO internacional
export const LANGS = [
    {code: "es", url: SITE.url + "es/"}, // Español por defecto
    {code: "en", url: SITE.url + "en/"}, // Inglés
    {code: "pt", url: SITE.url + "pt/"}, // Portugués
];