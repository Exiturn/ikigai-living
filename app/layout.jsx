import "@styles/globals.css";
import localFont from "@next/font/local";

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

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Background />
        <Navbar />
        <main className={`app ${supreme.className}`}>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
