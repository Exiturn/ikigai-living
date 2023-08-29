import "@styles/globals.css";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import Image from "next/image";
import Images from "@utils/images";

import Navbar from "@components/navbar/Navbar";
import Background from "@components/background/Background";

export const metadata = {
  title: "IKIGAI LIVING",
  description: "The Japanese Inspired Eco-conscious homeware store",
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
});

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#f0f0f0]`}>
        <Navbar />
        <div className="hidden md:block">
          <Background />
        </div>
        <main className={`app ikigai-background`}>
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
