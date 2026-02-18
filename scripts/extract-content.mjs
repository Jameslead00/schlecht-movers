#!/usr/bin/env node
/**
 * Content extraction script for Schlecht Movers website.
 * Fetches content from https://schlecht-movers.ch/ and saves normalized JSON.
 *
 * Usage: node scripts/extract-content.mjs
 *
 * Output: src/content/extracted.json
 */

import { writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = join(__dirname, "..", "src", "content", "extracted.json");

const BASE = "https://schlecht-movers.ch";

const DE_PAGES = [
  { path: "/de/Home/", key: "home" },
  { path: "/de/Umzug/", key: "umzug" },
  { path: "/de/Umzug/Transport/", key: "transport" },
  { path: "/de/Firmenumzug/", key: "firmenumzug" },
  { path: "/de/Raeumung-und-Entsorgung/", key: "raeumung" },
  { path: "/de/USM-Haller/", key: "usm" },
  { path: "/de/Ueber-uns/", key: "about" },
  { path: "/de/Ueber-uns/Kontakt/", key: "kontakt" },
  { path: "/de/Ueber-uns/Referenzen/", key: "referenzen" },
  { path: "/de/Ueber-uns/unser-Team/", key: "team" },
];

const EN_PAGES = [
  { path: "/en/Home/", key: "home" },
  { path: "/en/Privat-relocation/", key: "umzug" },
  { path: "/en/Privat-relocation/Transport/", key: "transport" },
  { path: "/en/Corporate-relocation/", key: "firmenumzug" },
  { path: "/en/Disposal-and-Clearance/index.php/", key: "raeumung" },
  { path: "/en/USM-Haller/", key: "usm" },
  { path: "/en/About-us/", key: "about" },
  { path: "/en/About-us/Contact/", key: "kontakt" },
  { path: "/en/About-us/References/", key: "referenzen" },
  { path: "/en/About-us/Our-Team/", key: "team" },
];

async function fetchPage(url) {
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
      },
    });
    if (!res.ok) return null;
    return await res.text();
  } catch {
    return null;
  }
}

function extractText(html) {
  if (!html) return [];
  // Simple extraction: get text between tags
  const sections = [];
  // Remove scripts and styles
  html = html.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "");
  html = html.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "");

  // Extract headings and paragraphs
  const hRegex = /<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi;
  const pRegex = /<p[^>]*>([\s\S]*?)<\/p>/gi;

  let match;
  while ((match = hRegex.exec(html)) !== null) {
    const text = match[1].replace(/<[^>]+>/g, "").trim();
    if (text) sections.push({ type: "heading", text });
  }
  while ((match = pRegex.exec(html)) !== null) {
    const text = match[1].replace(/<[^>]+>/g, "").trim();
    if (text) sections.push({ type: "paragraph", text });
  }
  return sections;
}

async function main() {
  console.log("Extracting content from schlecht-movers.ch...");

  const result = {
    extractedAt: new Date().toISOString(),
    company: {
      name: "Schlecht Movers",
      legalName: "Schlecht und Co. GmbH",
      address: "Bruggstrasse 7, 4153 Reinach BL",
      email: "jillschlecht@schlecht-movers.ch",
      phones: ["+41 61 711 11 15", "+41 79 197 89 92"],
      whatsapp: "+41791978992",
      instagram: "https://www.instagram.com/schlechtundco",
      agbUrl: "/docs/AGB-25.11.2025.pdf",
    },
    pages: { de: {}, en: {} },
  };

  for (const page of DE_PAGES) {
    console.log(`  Fetching DE: ${page.path}`);
    const html = await fetchPage(`${BASE}${page.path}`);
    result.pages.de[page.key] = {
      url: page.path,
      content: extractText(html),
      fetched: !!html,
    };
  }

  for (const page of EN_PAGES) {
    console.log(`  Fetching EN: ${page.path}`);
    const html = await fetchPage(`${BASE}${page.path}`);
    result.pages.en[page.key] = {
      url: page.path,
      content: extractText(html),
      fetched: !!html,
    };
  }

  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, JSON.stringify(result, null, 2));
  console.log(`\nContent saved to ${OUTPUT_PATH}`);
}

main().catch(console.error);
