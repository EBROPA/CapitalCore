import Link from "next/link";

const stats = [
  { label: "Объём сделок 2024", value: "₽612 млрд", trend: "+18% YoY" },
  { label: "Средний CAP Rate", value: "9.2%", trend: "Office A · 8.2%" },
  { label: "Вакансия A-класс", value: "6.1%", trend: "↓ 1.4 п.п." },
  { label: "Рост ставок street retail", value: "+12%", trend: "Тверская · +19%" }
];

const rentRows = [
  { segment: "Офисы класс A", value: "55 000", trend: "+6%" },
  { segment: "Офисы класс B+", value: "36 500", trend: "+4%" },
  { segment: "Street retail prime", value: "118 000", trend: "+12%" },
  { segment: "Инвест-лоты (доходные дома)", value: "27 000", trend: "+8%" }
];

const buyerShare = [
  { label: "Семейные офисы", value: "27% сделок" },
  { label: "Девелоперы", value: "18%" },
  { label: "Институциональные", value: "22%" },
  { label: "High-net-worth", value: "33%" }
];

const insights = [
  "Шорт-лист активов в пределах ТТК ограничен — 47 лотов с IRR > 13%.",
  "Банки требуют DSCR ≥ 1.35 для офисов, ≥ 1.5 для смешанных активов.",
  "В 2025–2026 гг. 480 тыс. м² офисов выводится в новых районах (Сити, Строгино, Сколково)."
];

export default function MarketPage() {
  return (
    <div>
      <section className="page-hero market-hero">
        <div className="motion-orb orb-lg" style={{ top: "-140px", right: "-120px" }} />
        <div className="container">
          <p className="section-label">Market Data · декабрь 2025</p>
          <h1 className="section-title">Коммерческий рынок Москвы: макроцифры и доходность</h1>
          <p className="section-desc">
            Сводка по сделкам, ставкам аренды и доходности по ключевым сегментам: офисы, street
            retail, инвест-лоты и жильё бизнес-класса. Источники — CapitalCore Research, Knight
            Frank, CBRE.
          </p>
          <div className="market-stats">
            {stats.map((stat) => (
              <article key={stat.label} className="market-stat">
                <small>{stat.label}</small>
                <strong>{stat.value}</strong>
                <span className="trend-chip">{stat.trend}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container market-grid">
          <article className="market-card">
            <h3>Ставки аренды (₽/м²/год)</h3>
            <table className="market-table">
              <thead>
                <tr>
                  <th>Сегмент</th>
                  <th>Значение</th>
                  <th>Trend</th>
                </tr>
              </thead>
              <tbody>
                {rentRows.map((row) => (
                  <tr key={row.segment}>
                    <td>{row.segment}</td>
                    <td>{row.value}</td>
                    <td>
                      <span className="trend-chip">{row.trend}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="market-note">
              Ставки указаны за чистую аренду, без НДС. Источник: CapitalCore / Knight Frank / CBRE.
            </p>
          </article>
          <article className="market-card">
            <h3>Доходность и срок окупаемости</h3>
            {[
              { label: "Офисы класса A · CAP 8.2%", progress: 82 },
              { label: "Street retail первой линии · CAP 9.5%", progress: 95 },
              { label: "Доходные дома · CAP 10.4%", progress: 104 },
              { label: "Жильё бизнес-класса (аренда) · CAP 7.4%", progress: 74 }
            ].map((bar) => (
              <div key={bar.label} style={{ marginBottom: "1rem" }}>
                <div className="bar-track">
                  <div className="bar-fill" data-progress={bar.progress}></div>
                </div>
                <small>{bar.label}</small>
              </div>
            ))}
            <p className="market-note">Средний срок окупаемости портфелей CapitalCore — 9.1 лет.</p>
          </article>
        </div>
      </section>

      <section>
        <div className="container market-grid">
          <article className="market-card">
            <h3>Финансирование и ставки</h3>
            <ul className="list-soft">
              <li>Project finance под доходные активы — 13.3% (ключевая + 3 п.п.)</li>
              <li>CLUB-сделки под поручительство — 11.9% (фикс на 3 года)</li>
              <li>ESG-инструменты — 10.7% (при сертификации BREEAM/LEED)</li>
            </ul>
            <p className="market-note">Банки: Сбер, Дом.РФ, МКБ, Газпромбанк. Согласование 35–45 дней.</p>
          </article>
          <article className="market-card">
            <h3>Активность покупателей</h3>
            <table className="market-table">
              <tbody>
                {buyerShare.map((row) => (
                  <tr key={row.label}>
                    <td>{row.label}</td>
                    <td>{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="market-note">Структура по количеству закрытых сделок ≥ ₽300 млн.</p>
          </article>
        </div>
      </section>

      <section>
        <div className="container grid-2">
          <div className="data-highlight">
            <p>Москва-Сити</p>
            <strong>Вакансия 4.5%</strong>
            <p>Ставки продажи выросли до 850 000 ₽/м², спрос — IT, финтех, консалтинг.</p>
          </div>
          <div className="data-highlight">
            <p>Street retail</p>
            <strong>Traffic recovery 108%</strong>
            <p>
              Тверская, Никольская, Патриаршие пруды — рекордные footfall, сделки закрываются за 45
              дней.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container grid-2">
          <div>
            <p className="section-label">Market insights</p>
            <h2 className="section-title">Что важно инвестору прямо сейчас</h2>
            <ul className="list-soft">
              {insights.map((insight) => (
                <li key={insight}>{insight}</li>
              ))}
            </ul>
          </div>
          <div className="card insights-cta">
            <div className="insights-cta__header">
              <h3>Нужен созвон?</h3>
              <p>Запланируем 20-минутный звонок: покажем Excel-модель, выгрузку сделок и обсудим KPI.</p>
            </div>
            <ul className="insights-cta__points">
              <li>Рассчитаем ROI по вашим вводным</li>
              <li>Поделимся шорт-листом активов</li>
              <li>Согласуем следующий шаг и SLA</li>
            </ul>
            <form className="insights-cta__form js-inline-form">
              <div className="input-shell">
                <input type="text" placeholder="Имя" required />
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
                Назначить звонок
              </button>
            </form>
            <p className="insights-cta__note">
              После заявки менеджер свяжется в течение 30 минут. Или напишите напрямую в{" "}
              <Link href="https://t.me/capital_core" target="_blank" rel="noreferrer">
                Telegram
              </Link>
              .
            </p>
            <button
              type="button"
              className="insights-cta__modal-link"
              data-modal-target="contact"
            >
              Назначить звонок с партнёром
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

