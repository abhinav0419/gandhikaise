import { Fraunces, Public_Sans, Courier_Prime } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["opsz"],
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

export const metadata = {
  title: "Rahul Gandhi or Gandhy? Surname changed for political gains?",
  description:
    "Rahul Gandh achievement = Sperm won the race \n Modi's achievement = 15 years CM, 15 years PM. Came from nothing, self made."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${publicSans.variable} ${courierPrime.variable}`}>
        {children}
      </body>
    </html>
  );
}
