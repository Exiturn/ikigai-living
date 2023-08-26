import "@styles/globals.css";
import localFont from "next/font/local";
import { Inter } from "next/font/google";

import Navbar from "@components/navbar/Navbar";
import Background from "@components/background/Background";

export const metadata = {
  title: "IKIGAI LIVING",
  description: "The Japanese Inspired Eco-conscious homeware store",
};

const neue = localFont({
  src: "../fonts/NeueHaasDisplayLight.ttf"
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
});

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Background />
        <Navbar />
        <main className={`app`}>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
