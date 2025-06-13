// src/app/layout.js
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: {
    default: "Bakaluba Services",
    template: "%s / Architect&Speaker",
  },
  description: "Construction services and motivational speaking",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" mx-auto min-h-screen">
        <Navbar />
        <main className="flex-grow px-4 max-w-[120rem] mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
