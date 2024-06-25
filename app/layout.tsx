import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], variable: "--font-poppins" });

export const metadata: Metadata = {
  title: "Hagop Hovaguimian",
  description: "My custom website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" style={{colorScheme: "dark"}}>
      <body className={poppins.variable}>
        <noscript>You need to enable javascript to run this app.</noscript>
        <div className="bg-gradient-to-br from-primary to-secondary">
          <div className="w-full min-h-screen font-poppins">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
