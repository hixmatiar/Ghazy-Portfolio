import "./globals.css";
import Zain from "next/font/local";

const myFont = Zain({
  src: "./fonts/Alata,Geist,Geist_Mono,JetBrains_Mono/Zain/Zain-Bold.ttf",
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
