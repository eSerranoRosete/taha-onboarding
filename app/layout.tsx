import { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Encuestra Grupo Taha",
  description: "Encuesta financiera para Grupo Taha",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {/* <span className="absolute text-center text-xs bottom-5 left-1/2 -translate-x-1/2">
          Powered by <strong>Inteminer</strong>
        </span> */}
      </body>
    </html>
  );
}
