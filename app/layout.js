import { Londrina_Solid } from "next/font/google";
import "./globals.css";

const londrina = Londrina_Solid({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Nitash Biswas",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${londrina.className}`}>{children}</body>
    </html>
  );
}
