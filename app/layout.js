// src/app/layout.js
import "./globals.css";

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
        <main className="flex-grow px-4 max-w-[120rem] mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
