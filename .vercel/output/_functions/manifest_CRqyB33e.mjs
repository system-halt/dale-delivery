import 'kleur/colors';
import { p as decodeKey } from './chunks/astro/server_CTk6fFSA.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CsA7JDIj.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/crpar/OneDrive/Documentos/Proyectos/dale-delivery/","cacheDir":"file:///C:/Users/crpar/OneDrive/Documentos/Proyectos/dale-delivery/node_modules/.astro/","outDir":"file:///C:/Users/crpar/OneDrive/Documentos/Proyectos/dale-delivery/dist/","srcDir":"file:///C:/Users/crpar/OneDrive/Documentos/Proyectos/dale-delivery/src/","publicDir":"file:///C:/Users/crpar/OneDrive/Documentos/Proyectos/dale-delivery/public/","buildClientDir":"file:///C:/Users/crpar/OneDrive/Documentos/Proyectos/dale-delivery/dist/client/","buildServerDir":"file:///C:/Users/crpar/OneDrive/Documentos/Proyectos/dale-delivery/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"robots.txt","links":[],"scripts":[],"styles":[],"routeData":{"route":"/robots.txt","isIndex":false,"type":"endpoint","pattern":"^\\/robots\\.txt\\/?$","segments":[[{"content":"robots.txt","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/robots.txt.ts","pathname":"/robots.txt","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/contact","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/contact\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/contact.ts","pathname":"/api/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://www.daledelivey.com/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/crpar/OneDrive/Documentos/Proyectos/dale-delivery/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/api/contact@_@ts":"pages/api/contact.astro.mjs","\u0000@astro-page:src/pages/robots.txt@_@ts":"pages/robots.txt.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CRqyB33e.mjs","C:/Users/crpar/OneDrive/Documentos/Proyectos/dale-delivery/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_Ca7AVBXZ.mjs","@/components/ToasterClient":"_astro/ToasterClient.BP5-366d.js","C:/Users/crpar/OneDrive/Documentos/Proyectos/dale-delivery/src/components/ui/ContactForm.tsx":"_astro/ContactForm.Cz2_GtDs.js","@astrojs/react/client.js":"_astro/client.C-5lHpHR.js","C:/Users/crpar/OneDrive/Documentos/Proyectos/dale-delivery/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.puzeRYQ-.js","C:/Users/crpar/OneDrive/Documentos/Proyectos/dale-delivery/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.DWB1JHmb.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/crpar/OneDrive/Documentos/Proyectos/dale-delivery/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts","const o={threshold:.1,rootMargin:\"0px 0px -50px 0px\"},n=new IntersectionObserver(t=>{t.forEach(e=>{e.isIntersecting&&(e.target.classList.add(\"animate-fade-in-up\"),n.unobserve(e.target))})},o);document.addEventListener(\"DOMContentLoaded\",()=>{document.querySelectorAll(\".animate-on-scroll\").forEach(e=>n.observe(e))});"],["C:/Users/crpar/OneDrive/Documentos/Proyectos/dale-delivery/src/components/Header.astro?astro&type=script&index=0&lang.ts","function d(){const n=document.getElementById(\"mobile-menu\"),t=document.getElementById(\"mobile-menu-btn\");if(!n||!t)return;n.style.maxHeight=\"0px\",n.style.overflow=\"hidden\";let o=!1;function l(){!n||!t||(o=!o,o?(n.style.maxHeight=\"400px\",t.classList.add(\"menu-open\"),t.setAttribute(\"aria-expanded\",\"true\")):(n.style.maxHeight=\"0px\",t.classList.remove(\"menu-open\"),t.setAttribute(\"aria-expanded\",\"false\")))}function a(){o&&l()}t.addEventListener(\"click\",e=>{e.preventDefault(),e.stopPropagation(),l()}),document.querySelectorAll(\".mobile-link\").forEach(e=>{e.addEventListener(\"click\",()=>{a()})}),document.addEventListener(\"click\",e=>{const r=document.querySelector(\"header\"),i=e.target;o&&r&&i&&!r.contains(i)&&a()}),window.addEventListener(\"resize\",()=>{window.innerWidth>=768&&o&&a()}),document.querySelectorAll('a[href^=\"#\"]').forEach(e=>{e.addEventListener(\"click\",r=>{const i=e.getAttribute(\"href\");if(!i||i===\"#\")return;const s=document.querySelector(i);if(s){r.preventDefault();const c=s.offsetTop-75;window.scrollTo({top:c,behavior:\"smooth\"})}})})}document.readyState===\"loading\"?document.addEventListener(\"DOMContentLoaded\",d):d();document.addEventListener(\"astro:page-load\",d);"]],"assets":["/_astro/background-inicio.Ca0GqKLh.jpg","/_astro/index.DsoA0A4U.css","/background-inicio.jpg","/contact.php","/favicon.svg","/logo.png","/logo.svg","/next-day.jpg","/plancard.jpg","/rayo.png","/same-day.jpg","/_astro/client.C-5lHpHR.js","/_astro/ContactForm.Cz2_GtDs.js","/_astro/index.BiBNLp36.js","/_astro/index.KaawcXci.js","/_astro/ToasterClient.BP5-366d.js","/icons/agenda-icon.png","/icons/caja-icon.png","/icons/calendar-icon.png","/icons/factura-icon.png","/icons/hand-icon.png","/icons/money-icon.png","/icons/truck-icon.png","/robots.txt","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"uFPxF0DcYr0EuUn76MqYr9a4EDx36NDYLLWEUzTeZLk="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
