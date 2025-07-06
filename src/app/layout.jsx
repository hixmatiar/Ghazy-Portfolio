import "./globals.css";
import Alata from "next/font/google";

const myFont = Alata({
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata = {
  title: "Ghazy Portfolio's",
  description: "A Programmer Big Data & Front-end Developer",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="bg-[#F8F4E1] scroll-smooth"
      suppressHydrationWarning
    >
      <body className={`${myFont.className}`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
