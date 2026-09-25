import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PETHALVOID // Strategic AI Operations & Fault-Tolerant Automation",
  description:
    "We engineer resilient, self-healing n8n automation pipelines and LangGraph AI agent systems for global SMBs. Zero fragile scripts. Zero vendor lock-in. Backed by SLA.",
  keywords: [
    "n8n automation",
    "AI automation agency",
    "LangGraph AI agent",
    "Zapier to n8n migration",
    "autonomous agent development",
    "workflow automation consultant",
    "self-hosted n8n",
    "RAG systems",
  ],
  authors: [{ name: "Muhammad Yafizham Batubara", url: "https://pethalvoid.com" }],
  openGraph: {
    title: "PETHALVOID // Strategic AI Operations & Automation",
    description:
      "Enterprise-grade n8n pipelines & LangGraph AI agents. Real reliability. Zero fragile workflows.",
    url: "https://pethalvoid.com",
    siteName: "PETHALVOID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PETHALVOID // AI Systems That Actually Work in Production",
    description:
      "Enterprise-grade n8n pipelines & LangGraph AI agents for global SMBs.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${spaceMono.variable} dark scroll-smooth`}>
      <body className="min-h-screen bg-[#080808] text-[#f4f4f4] antialiased selection:bg-[#f5e642] selection:text-[#080808]">
        {children}
      </body>
    </html>
  );
}
