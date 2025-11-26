import Link from "next/link";

const footerNav = [
  { href: "/", label: "Главная" },
  { href: "/services", label: "Услуги" },
  { href: "/catalog", label: "Каталог" },
  { href: "/market", label: "Market Data" },
  { href: "/about", label: "О компании" },
  { href: "/contacts", label: "Контакты" }
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <section className="footer-bridge">
        <div className="container footer-bridge__grid">
          <div>
            <p className="footer-bridge__eyebrow">Работаем с 2023 года</p>
            <h3>Готовы обсудить инвестиционную стратегию или конкретный объект?</h3>
            <p>
              Оставьте заявку — подключим сделку, подготовим аналитику и проведём через всю
              процедуру закрытия.
            </p>
          </div>
          <button type="button" className="btn btn-primary" data-modal-target="contact">
            Назначить звонок
          </button>
        </div>
      </section>
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <p className="brand-inline brand-inline--footer">
                <span className="logo-part-1">CAPITAL</span>
                <span className="logo-part-2">CORE</span>
              </p>
              <p>Коммерческая недвижимость премиум-класса. Базируемся в Москве.</p>
              <p>Работаем с 2023 года: подбор, оценка и сопровождение сделок.</p>
            </div>
            <div className="footer-col">
              <strong>Контакты</strong>
            <a className="footer-link" href="tel:+74950322199">
              +7 (495) 032-21-99
              </a>
            <a className="footer-link" href="mailto:deal@capitalcore.moscow">
              deal@capitalcore.moscow
              </a>
              <div className="footer-actions">
                <a
                  className="footer-pill footer-pill--wa"
                href="https://wa.me/74950322199"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
                <a
                  className="footer-pill footer-pill--tg"
                href="https://t.me/capital_core"
                  target="_blank"
                  rel="noreferrer"
                >
                  Telegram
                </a>
              </div>
            </div>
            <div className="footer-col">
              <strong>Офис и график</strong>
            <p>Москва, Бумажный пр-д, д. 19, Stone Towers</p>
            <p>График работы: 09:00 — 21:00 (MSK)</p>
            </div>
            <div className="footer-col footer-nav">
              <strong>Навигация</strong>
              <ul>
                {footerNav.map((link) => (
                  <li key={link.href}>
                    <Link className="footer__nav-link" href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {year} CapitalCore. Все права защищены.</span>
          </div>
        </div>
      </footer>
    </>
  );
}

