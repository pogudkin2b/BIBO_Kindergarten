import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Русско-Английский детский сад «БИБО» в Тбилиси — семейная атмосфера с 1985 года",
  description: "Русско-Английский детский сад «БИБО» в Тбилиси. С 1985 года растим детей в тёплой семейной атмосфере: 3-разовое питание, приватная зелёная территория, английский язык, музыка, танцы, творчество и подготовка к школе.",
  keywords: "детский сад, Тбилиси, БИБО, русский детский сад, английский язык, дети, образование, Грузия, приватная территория, семейный садик",
  openGraph: {
    title: "Русско-Английский детский сад «БИБО» в Тбилиси — семейная атмосфера с 1985 года",
    description: "С 1985 года растим детей в тёплой семейной атмосфере: приватная зелёная территория, английский язык, музыка, танцы, творчество и подготовка к школе",
    type: "website",
    locale: "ru_RU",
    alternateLocale: ["en_US", "ka_GE"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
