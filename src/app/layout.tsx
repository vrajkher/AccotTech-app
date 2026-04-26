import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AccoTechAI Ltd OPC | AI-Powered CMA & CA Firm",
  description:
    "AccoTechAI Ltd OPC — India's premier AI-powered Cost Management & Chartered Accountancy firm. We combine deep financial expertise with cutting-edge artificial intelligence to deliver unmatched accounting, tax, audit, and advisory services.",
  keywords: [
    "CMA firm India",
    "CA firm AI",
    "AccoTechAI",
    "AI accounting",
    "cost management accountant",
    "chartered accountant",
    "GST filing",
    "tax consulting",
    "virtual CFO",
    "AI finance",
  ],
  authors: [{ name: "AccoTechAI Ltd OPC" }],
  creator: "AccoTechAI Ltd OPC",
  openGraph: {
    title: "AccoTechAI Ltd OPC | AI-Powered CMA & CA Firm",
    description:
      "Next-generation accounting intelligence. Where CMA expertise meets artificial intelligence.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "AccoTechAI Ltd OPC | AI-Powered CMA & CA Firm",
    description:
      "Next-generation accounting intelligence. Where CMA expertise meets artificial intelligence.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#020817",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} h-full antialiased`}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-full flex flex-col bg-[#020817] text-slate-100">
        {children}
      </body>
    </html>
  );
}
