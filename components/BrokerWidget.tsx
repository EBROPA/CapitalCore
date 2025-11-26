"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

const PhoneIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M7 3h2.6c.4 0 .8.3.9.6l.8 3c.1.4 0 .8-.3 1.1L9.7 8.9a11.8 11.8 0 0 0 5.4 5.4l1.2-1.3c.3-.3.7-.4 1.1-.3l3 .8c.4.1.7.4.7.9v2.6c0 .5-.4.9-.9.9A17.3 17.3 0 0 1 6.1 4c0-.5.4-.9.9-.9Z" />
  </svg>
);

const TelegramIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M21.8 3.2 2.9 10.6c-.9.3-.9 1.7 0 2l4.2 1.2 1.6 5.2c.2.8 1.2 1 1.7.4l2.5-2.7 4.4 3.3c.6.4 1.6.1 1.8-.7l3.5-15c.2-.8-.6-1.6-1.3-1.3Z" />
  </svg>
);

const WhatsappIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.5a9.5 9.5 0 0 0-8.2 14.5L3 22l5-1.6A9.5 9.5 0 1 0 12 2.5Zm0 1.8a7.7 7.7 0 0 1 6.5 11.9l-.2.3a7.7 7.7 0 0 1-10.3 2.5l-.2-.2-3 .9.9-3-.2-.2A7.7 7.7 0 0 1 12 4.3Zm-3 3.6c-.2 0-.5 0-.7.3-.2.3-.6.7-.6 1.2-.1.6-.1 1.4.8 2.8s1.8 2.2 2.1 2.5c.3.3 1.6 2.5 3.9 3.3 1.9.7 2.3.6 2.7.5.4 0 1.3-.5 1.5-1s.2-1 .1-1.1-.2-.2-.4-.3l-1.4-.6c-.2-.1-.3-.1-.5.1s-.6.7-.8.8-.3.2-.5.1-1-.4-1.9-1.3c-.7-.6-1.2-1.5-1.4-1.8-.1-.3 0-.4.1-.5.2-.2.5-.6.6-.9s0-.5-.1-.7l-.6-1.5c-.2-.4-.5-.5-.7-.6H9Z" />
  </svg>
);

const quickLinks = [
  { id: "telegram", label: "Написать в Telegram", href: "https://t.me/capital_core", className: "is-telegram", Icon: TelegramIcon },
  { id: "whatsapp", label: "Написать в WhatsApp", href: "https://wa.me/74950322199", className: "is-whatsapp", Icon: WhatsappIcon }
];

const menuLinks = [
  { id: "phone", label: "Позвонить", href: "tel:+74950322199", className: "is-phone", Icon: PhoneIcon },
  ...quickLinks
];

export default function BrokerWidget() {
  const [isMobile, setIsMobile] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isActive = isMobile ? menuOpen : panelOpen;

  useEffect(() => {
    const query = window.matchMedia("(max-width: 768px)");
    const sync = () => setIsMobile(query.matches);
    sync();
    if (query.addEventListener) {
      query.addEventListener("change", sync);
      return () => query.removeEventListener("change", sync);
    }
    query.addListener(sync);
    return () => query.removeListener(sync);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setPanelOpen(false);
    } else {
      setMenuOpen(false);
    }
  }, [isMobile]);

  const handleCircleClick = () => {
    if (isMobile) {
      setMenuOpen((prev) => !prev);
    } else {
      setPanelOpen((prev) => !prev);
    }
  };

  const closePanel = () => {
    setPanelOpen(false);
  };

  return (
    <div className="broker-anchor" role="complementary" aria-label="Персональный брокер CapitalCore">
      {!isMobile && panelOpen && (
        <div className="broker-panel">
          <button
            type="button"
            className="broker-panel__close"
            aria-label="Скрыть окно брокера"
            onClick={closePanel}
          >
            ×
          </button>
          <p className="broker-panel__eyebrow">Обратитесь за консультацией</p>
          <strong className="broker-panel__name">Болюх Елизавета</strong>
          <span className="broker-panel__role">эксперт проекта</span>
          <span className="broker-panel__divider" />
          <div className="broker-panel__actions">
            {quickLinks.map((item) => (
              <a
                key={item.id}
                className={`broker-contact-btn ${item.className}`}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
              >
                <item.Icon />
              </a>
            ))}
          </div>
          <a className="broker-panel__phone" href="tel:+74950322199">
            +7 495 032-21-99
          </a>
        </div>
      )}

      {isMobile && menuOpen && (
        <div className="broker-menu" role="menu" aria-label="Быстрое меню брокера">
          {menuLinks.map((item) => (
            <a
              key={item.id}
              className={`broker-menu__item ${item.className}`}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={item.label}
            >
              <item.Icon />
            </a>
          ))}
          <button
            type="button"
            className="broker-menu__item broker-menu__close"
            aria-label="Скрыть меню контактов"
            onClick={() => setMenuOpen(false)}
          >
            ×
          </button>
        </div>
      )}

      <button
        type="button"
        className={`broker-circle ${isActive ? "is-active" : ""} ${isMobile ? "is-mobile" : "is-desktop"}`}
        aria-expanded={isActive}
        aria-label="Контакты брокера"
        onClick={handleCircleClick}
      >
        <Image
          src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80"
          alt="Персональный брокер CapitalCore"
          width={96}
          height={96}
        />
        <span className="broker-circle__overlay" aria-hidden="true">
          <span />
          <span />
        </span>
      </button>
    </div>
  );
}

