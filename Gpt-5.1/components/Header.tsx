"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Главная" },
  { href: "/services", label: "Услуги" },
  { href: "/catalog", label: "Каталог" },
  { href: "/market", label: "Market Data" },
  { href: "/about", label: "О компании" },
  { href: "/contacts", label: "Контакты" }
];

const isActivePath = (pathname: string, href: string) => {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname.startsWith(href);
};

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  return (
    <header>
      <div className="container primary-nav">
        <Link href="/" className="brand" aria-label="CapitalCore — на главную">
          <span className="logo-part-1">CAPITAL</span>
          <span className="logo-part-2">CORE</span>
        </Link>

        <nav className="desktop-nav">
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={isActivePath(pathname, item.href) ? "is-active" : ""}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <Link className="btn btn-outline nav-cta" href="/contacts" data-modal-target="contact">
            Связаться
          </Link>
          <button
            type="button"
            className={`menu-toggle ${isMenuOpen ? "is-active" : ""}`}
            aria-label="Открыть меню"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className={`mobile-nav ${isMenuOpen ? "is-open" : ""}`}>
          <nav>
            <ul>
              {navItems.map((item) => (
                <li key={`mobile-${item.href}`}>
                  <Link
                    href={item.href}
                    className={isActivePath(pathname, item.href) ? "is-active" : ""}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button className="btn btn-outline" data-modal-target="contact" onClick={closeMenu}>
            Назначить звонок
          </button>
        </div>
        <div
          className={`nav-overlay ${isMenuOpen ? "is-active" : ""}`}
          onClick={closeMenu}
          aria-hidden={!isMenuOpen}
        />
      </div>
    </header>
  );
}

