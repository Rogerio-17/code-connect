import { Prompt } from "next/font/google";
import { Aside } from "@/components/Aside";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Code Connect",
  description: "Uma rede social para devs",
};

const prompt = Prompt({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={prompt.className}>
      <body>
        <div className="app-container">
          <Aside />
          {children}
        </div>
      </body>
    </html>
  );
}
