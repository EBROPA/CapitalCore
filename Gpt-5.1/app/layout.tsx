import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ClientEffects from "../components/ClientEffects";
import BrokerWidget from "../components/BrokerWidget";
import ContactModal from "../components/ContactModal";

export const metadata: Metadata = {
  title: "CapitalCore — коммерческая недвижимость премиум-класса",
  description:
    "CapitalCore — консалтинг, подбор и сопровождение сделок с коммерческой недвижимостью премиум-класса в Москве."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <div className="ambient-bg" aria-hidden="true" />
        <ClientEffects />
        <Header />
        <main>{children}</main>
        <Footer />
        <BrokerWidget />
        <ContactModal />
      </body>
    </html>
  );
}

