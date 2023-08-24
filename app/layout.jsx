import "@styles/globals.css";
import localFont from "@next/font/local";

export const metadata = {
  title: "Ikigai Living",
  description: "The Japanese Inspired Eco-conscious homeware store",
};

const supreme = localFont({
    src: "../fonts/Supreme-Variable.ttf",
})

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main className={`app ${supreme.className}`}>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
