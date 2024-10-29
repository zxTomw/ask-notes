import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ask Notes",
    short_name: "Ask",
    description: "A Progressive Web App built with Next.js",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    screenshots: [
      {
        src: "/screenshot-wide.png",
        sizes: "2806x1498",
        form_factor: "wide",
      },
      {
        src: "/screenshot-narrow.png",
        sizes: "766x1334",
        form_factor: "narrow",
      },
    ],
    icons: [
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
