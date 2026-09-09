import { Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { content } from "../content";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://vaibhavvishal.in"),
  title: `${content.name} — ${content.role}`,
  description: content.intro,
  openGraph: {
    title: `${content.name} — ${content.role}`,
    description: content.intro,
    type: "website",
  },
};

export const viewport = {
  themeColor: "#0d0d0d",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${archivo.variable} ${mono.variable}`}>
      <body>
        {/* if JS never runs, make sure nothing stays hidden */}
        <noscript>
          <style>{`.rv{opacity:1!important;transform:none!important}.split-inner{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
