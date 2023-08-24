import "@styles/globals.css";
import localFont from "@next/font/local";

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
      <body className="ikigai-background">
        <main className={`app ${supreme.className}`}>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
