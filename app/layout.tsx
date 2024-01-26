import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import Loader from "./components/loader/loader";
import Cursor from "./components/ui/cursor";

export const metadata: Metadata = {
  title: "Sean Relampagos | Software Engineer",
  description:
    "Sean Relampagos stands out as a dynamic full stack software engineer, renowned for his expert handling of both frontend and backend development, along with operations management. His approach seamlessly blends innovation with practicality, making him a valuable asset in the tech industry.",
  keywords: [
    "Sean Relampagos",
    "full stack software engineer",
    "frontend development",
    "backend development",
    "operations management",
    "software innovation",
    "tech industry",
    "user interfaces",
    "server-side applications",
    "efficiency in software",
    "reliability in development",
    "Interseed landing page",
    "Xian Bird Nest House e-commerce",
    "Spotify Web Player",
    "NFT minting application",
    "Thoth Web Forum",
    "Prisma ORM",
    "Express",
    "Next.js",
    "Vue.js",
    "Svelte",
    "TypeScript",
    "Python",
    "Java",
    "technical excellence",
    "programming skill",
    "creative software solutions",
  ],
  authors: [{ name: "Sean Relampagos" }],
  metadataBase: new URL("https://seangjr.tech"),
  openGraph: {
    siteName: "Sean Relampagos Portfolio Website",
    type: "website",
    url: "https://seangjr.tech",
    title: "Sean Relampagos | Software Engineer",
    description:
      "Sean Relampagos stands out as a dynamic full stack software engineer, renowned for his expert handling of both frontend and backend development, along with operations management. His approach seamlessly blends innovation with practicality, making him a valuable asset in the tech industry.",
  },
  twitter: {
    site: "@seangjr",
    creator: "@seangjr",
  },
};

const neueMontreal = localFont({
  src: [
    {
      path: "components/font/nm/NeueMontreal-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "components/font/nm/NeueMontreal-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "components/font/nm/NeueMontreal-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "components/font/nm/NeueMontreal-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Loader />
        <div className="site-content">{children}</div>
      </body>
    </html>
  );
}
