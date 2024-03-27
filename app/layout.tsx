import type { Metadata } from "next";
import "./globals.scss";
import Loader from "./components/loader/loader";

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
    images: [
      {
        url: "https://seangjr.tech/assets/og.webp",
        width: 1200,
        height: 630,
        alt: "Sean Relampagos Portfolio Website",
      },
      {
        url: "https://seangjr.tech/assets/og2.webp",
        width: 1200,
        height: 630,
        alt: "Sean Relampagos Portfolio Website",
      },
    ],
  },
  twitter: {
    site: "@seangjr",
    creator: "@seangjr",
    card: "summary_large_image",
    images: [
      {
        url: "https://seangjr.tech/assets/og.webp",
        width: 1200,
        height: 630,
        alt: "Sean Relampagos Portfolio Website",
      },
      {
        url: "https://seangjr.tech/assets/og2.webp",
        width: 1200,
        height: 630,
        alt: "Sean Relampagos Portfolio Website",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Loader />
        <div className="site-content">{children}</div>
      </body>
    </html>
  );
}
