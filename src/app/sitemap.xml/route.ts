import { NextResponse } from "next/server";

function generateStaticUrls(baseUrl: string, paths: { path: string }[]) {
  return paths
    .map((path) => {
      const loc = `${baseUrl}${path.path}`;

      return `
      <url>
        <loc>${loc}</loc>
        ${[
          {
            imagem: "emmajanemackinnonlee_portraitwide",
            texto: "Wide Portrait",
          },
          {
            imagem: "emmajanemackinnonlee_wind",
            texto: "Wind in Hair",
          },
          {
            imagem: "emmajanemackinnonlee_blink",
            texto: "Blinking",
          },
        ].map(
          (im) =>
            `<image:image>
            <image:loc>${`${baseUrl}/images/${im.imagem}.png`}</image:loc>
            <image:title><![CDATA[${
              im.texto
            } | Emma-Jane MacKinnon-Lee ]]></image:title>
            <image:caption><![CDATA[${
              im.texto
            } | Emma-Jane MacKinnon-Lee]]></image:caption>
          </image:image>`
        )}
      </url>
      `;
    })
    .join("");
}

export async function GET() {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    "https://emmajanemackinnonlee-history.com";

  const staticPaths = [{ path: "/" }];
  const staticXml = generateStaticUrls(baseUrl, staticPaths);

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
>
${staticXml}
</urlset>`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
