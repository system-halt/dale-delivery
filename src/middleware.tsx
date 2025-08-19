// import {defineMiddleware} from "astro:middleware";
// import {LANGS} from "./config/seo";
//
// export const onRequest = defineMiddleware(async (context, next) => {
//     const url = new URL(context.request.url);
//
//     // Evitar bucles si ya está en un idioma
//     if (LANGS.some((lang) => url.pathname.startsWith(`/${lang.code}`))) {
//         return next();
//     }
//
//     // Detectar idioma del navegador
//     const acceptLang = context.request.headers.get("accept-language") || "";
//     const preferredLang = acceptLang.split(",")[0].split("-")[0]; // ej: "en-US" -> "en"
//
//     // Buscar si el idioma existe en nuestra config
//     const langMatch = LANGS.find((lang) => lang.code === preferredLang);
//
//     // Si existe, redirigir; si no, fallback a español
//     const redirectTo = langMatch ? `/${langMatch.code}/` : "";
//
//     return Response.redirect(new URL(redirectTo, url.origin), 302);
// });
