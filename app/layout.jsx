import "@styles/globals.css";
import localFont from "next/font/local";
import { Inter } from "next/font/google";

import Navbar from "@components/navbar/Navbar";
import Background from "@components/background/Background";

export const metadata = {
  title: "IKIGAI LIVING",
  description: "The Japanese Inspired Eco-conscious homeware store",
};

const supreme = localFont({
    src: "../fonts/Supreme-Variable.ttf",
})

const acid = localFont({
  src: "../fonts/FFFAcidGroteskVariableTRIALVF.ttf"
})

const odasans = localFont({
  src: "../fonts/Odasans-medium.ttf"
})

const neue = localFont({
  src: "../fonts/NeueHaasDisplayLight.ttf"
})

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${neue.className}`}>
        <Background />
        <Navbar />
        <main className={`app`}>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
