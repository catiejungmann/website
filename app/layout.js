import { Geist, Geist_Mono } from "next/font/google";
// app/layout.js or pages/_app.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'keen-slider/keen-slider.min.css'
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SYNTEREST",
  description: "Cause we believe in Finding love",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
