import Link from "next/link";
import CatalogGrid from "../../components/CatalogGrid";
import { properties } from "../../data/properties";

export default function CatalogPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumbs">Главная · Каталог объектов</p>
          <h1 className="section-title">Каталог коммерческой недвижимости</h1>
          <p className="section-desc">
            Структурированные инвестиционные лоты: street retail, офисы класса A, отдельно стоящие
            здания и инвест-пакеты. Каждая карточка содержит ключевые метрики — ставка, окупаемость,
            рейтинг риска.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <CatalogGrid items={properties} />
        </div>
      </section>

      <section>
        <div className="container grid-2">
          <div>
            <p className="section-label">Как работает каталог</p>
            <h2 className="section-title">За каждым объектом — due diligence и прогноз доходности</h2>
            <p className="section-desc">
              Мы обновляем данные в режиме реального времени: ставки, вакантность, расходы. Клиент
              получает все материалы в защищённом data-room.
            </p>
            <ul className="list-soft">
              <li>Инвест-рейтинг по 27 параметрам риска</li>
              <li>Отдельная карточка объекта с фото, 3D и документами</li>
              <li>Прямой доступ к команде аналитиков</li>
            </ul>
          </div>
          <div className="card catalog-cta">
            <span className="catalog-cta__badge">закрытые сделки</span>
            <h3>Запросить расширенный доступ</h3>
            <p>Получите полный каталог, NDA и доступ к закрытым активам в защищённом data-room.</p>
            <div className="catalog-cta__chips">
              <span className="catalog-cta__chip">70+ off-market</span>
              <span className="catalog-cta__chip">обновления 24/7</span>
              <span className="catalog-cta__chip">аналитик на связи</span>
            </div>
            <form className="catalog-cta__form js-inline-form">
              <div className="input-shell">
                <input type="text" placeholder="Имя" required />
              </div>
              <div className="input-shell">
                <input type="email" placeholder="Email" required />
              </div>
              <div className="input-shell">
                <input
                  type="tel"
                  className="js-phone-input"
                  placeholder="+7 (___) ___-__-__"
                  inputMode="tel"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary" data-success-label="Отправлено">
                Получить доступ
              </button>
            </form>
            <p className="catalog-cta__note">
              После запроса подписываем NDA, открываем доступ к data-room и присылаем shortlist. Можно
              также написать в{" "}
              <Link href="https://t.me/capital_core" target="_blank" rel="noreferrer">
                Telegram
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

