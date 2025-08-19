import type {APIRoute} from "astro";
import {SITE} from "../config/seo";

export const GET: APIRoute = () => {
    return new Response(
        `User-agent: *
Allow: /

Sitemap: ${SITE.url}sitemap-index.xml
`,
        {
            headers: {
                "Content-Type": "text/plain",
            },
        }
    );
};
