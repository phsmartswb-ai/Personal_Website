import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const outputDirectory = path.resolve("dist/spa");
const template = await readFile(
  path.join(outputDirectory, "index.html"),
  "utf8",
);
const siteUrl = "https://hemanthpalakaluri.netlify.app";

const pages = [
  {
    path: "projects/active-iq",
    title: "Active IQ case study | Hemanth Palakaluri",
    description:
      "Predictive analytics and proactive support experiences for global hybrid-cloud infrastructure.",
    type: "AI-powered digital advisor",
    name: "Active IQ",
    role: "Senior Technical Lead · Front-end architecture and delivery",
    stack: "Angular · React · TypeScript · GraphQL",
  },
  {
    path: "projects/neo",
    title: "NEO case study | Hemanth Palakaluri",
    description:
      "A full-stack platform built from the ground up across architecture, development, cloud delivery, security, and operations.",
    type: "Digital adoption platform",
    name: "NEO",
    role: "Senior Technical Lead · End-to-end product ownership",
    stack: "Next.js · Python · AWS · Docker · Jenkins",
  },
  {
    path: "projects/bluexp-sustainability",
    title: "BlueXP Sustainability case study | Hemanth Palakaluri",
    description:
      "Enterprise dashboards for energy-consumption tracking and sustainability workflows.",
    type: "Energy analytics",
    name: "BlueXP Sustainability",
    role: "Senior Technical Lead · UI engineering",
    stack: "React · TypeScript · GraphQL · Data visualization",
  },
];

function replaceMeta(html, page) {
  const canonical = `${siteUrl}/${page.path}`;
  const structuredData = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: page.name,
    description: page.description,
    url: canonical,
    author: { "@type": "Person", name: "Hemanth Palakaluri" },
  });
  return html
    .replace(/<title>.*?<\/title>/, `<title>${page.title}</title>`)
    .replace(
      /(<meta name="description" content=")[^"]*(" \/>)/,
      `$1${page.description}$2`,
    )
    .replace(
      /(<meta property="og:url" content=")[^"]*(" \/>)/,
      `$1${canonical}$2`,
    )
    .replace(
      /(<meta property="og:title" content=")[^"]*(" \/>)/,
      `$1${page.title}$2`,
    )
    .replace(
      /(<meta property="og:description" content=")[^"]*(" \/>)/,
      `$1${page.description}$2`,
    )
    .replace(
      /(<meta name="twitter:title" content=")[^"]*(" \/>)/,
      `$1${page.title}$2`,
    )
    .replace(
      /(<meta name="twitter:description" content=")[^"]*(" \/>)/,
      `$1${page.description}$2`,
    )
    .replace(/(<link rel="canonical" href=")[^"]*(" \/>)/, `$1${canonical}$2`)
    .replace(
      /(<script id="structured-data" type="application\/ld\+json">)[\s\S]*?(<\/script>)/,
      `$1${structuredData}$2`,
    );
}

for (const page of pages) {
  const content = `<article style="max-width:960px;margin:0 auto;padding:80px 24px;font-family:Arial,sans-serif;color:#17231f"><a href="/">← Portfolio</a><p style="margin-top:64px;text-transform:uppercase;letter-spacing:.12em;color:#496a58">${page.type}</p><h1 style="font-size:clamp(48px,8vw,80px);margin:20px 0">${page.name}</h1><p style="font-size:20px;line-height:1.6;max-width:760px">${page.description}</p><hr style="margin:48px 0;border:0;border-top:1px solid #d6d9d2"><h2>Role</h2><p>${page.role}</p><h2>Technology</h2><p>${page.stack}</p></article>`;
  const html = replaceMeta(template, page).replace(
    '<div id="root"></div>',
    `<div id="root">${content}</div>`,
  );
  const directory = path.join(outputDirectory, page.path);
  await mkdir(directory, { recursive: true });
  await writeFile(path.join(directory, "index.html"), html);
}

const homeContent = `<main style="max-width:960px;margin:0 auto;padding:80px 24px;font-family:Arial,sans-serif;color:#17231f"><p>Senior Technical Lead · Bengaluru, India</p><h1 style="font-size:clamp(48px,8vw,96px);margin:20px 0">Hemanth Palakaluri</h1><h2>Building scalable enterprise products from interface to cloud.</h2><p style="font-size:18px;line-height:1.7;max-width:760px">Senior Technical Lead with 10+ years of experience delivering secure, high-quality web platforms, shaping front-end architecture, and helping multidisciplinary teams ship with confidence.</p><nav style="margin-top:32px"><a href="/projects/active-iq">Active IQ</a> · <a href="/projects/neo">NEO</a> · <a href="/projects/bluexp-sustainability">BlueXP Sustainability</a></nav></main>`;
await writeFile(
  path.join(outputDirectory, "index.html"),
  template.replace(
    '<div id="root"></div>',
    `<div id="root">${homeContent}</div>`,
  ),
);
