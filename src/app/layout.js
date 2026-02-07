import { Geist, Geist_Mono } from "next/font/google";
import { Lato } from "next/font/google";
import "./globals.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import VisitorTracker from "./components/common/visit-tracker";
import StrickyBtn from "./components/common/stricky-button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
});

export const metadata = {
  title: "Marcorp Industries",
  description:
    "Connecting India to the World – Import, Export, Expand.Join thousands of businesses trading across borders with ease. Secure transactions, reliable logistics, and a hassle-free experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lato.variable} font-lato antialiased`}
      >
        <StrickyBtn />
        <VisitorTracker />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
