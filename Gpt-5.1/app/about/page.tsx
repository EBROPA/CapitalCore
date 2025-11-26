const stats = [
  { value: "С 2023", label: "на рынке premium CRE" },
  { value: "₽15 млрд", label: "совокупный объём активов под сопровождением" },
  { value: "80%", label: "клиентов остаются на долгосрочном обслуживании" }
];

const reasons = [
  "Собственная юридическая служба и risk-office",
  "Собственный доступ к международным финансирующим партнёрам",
  "Фиксированные SLA по срокам DD и закрытия сделки"
];

const partners = [
  "Stone Hedge",
  "MR Group",
  "AFI Development",
  "Etalon Group",
  "PIK Commercial",
  "Capital Group"
];

export default function AboutPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumbs">Главная · О компании</p>
          <h1 className="section-title">
            CapitalCore — инвестиционный советник по коммерческой недвижимости
          </h1>
          <p className="section-desc">
            С 2023 года сопровождаем сделки для семейных офисов, корпораций и девелоперов.
            Объединяем экспертизу инвестиционного банкинга, архитектуры и юридического консалтинга.
          </p>
          <div className="metrics-grid">
            {stats.map((stat) => (
              <article key={stat.label} className="metric-card">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container grid-2">
          <div>
            <p className="section-label">Миссия</p>
            <h2 className="section-title">Создавать понятные и доходные инвестиции в недвижимость</h2>
            <p className="section-desc">
              Мы верим в структурированность и прозрачность. Клиент получает не просто сделку, а
              стратегического партнёра, готового отвечать за результат.
            </p>
          </div>
          <div className="card philosophy-card">
            <div className="philosophy-card__header">
              <h3>Инвестиционная философия</h3>
              <span>framework</span>
            </div>
            <ul className="list-soft">
              <li>Data-driven решения и стресс-тесты</li>
              <li>Сбалансированный риск-профиль</li>
              <li>ESG-подход и устойчивые активы</li>
            </ul>
            <div className="philosophy-card__grid">
              <div>
                <small>Due diligence</small>
                <strong>72 часа</strong>
              </div>
              <div>
                <small>Риск-скоринг</small>
                <strong>27 метрик</strong>
              </div>
              <div>
                <small>Команда</small>
                <strong>12 аналитиков</strong>
              </div>
            </div>
            <div className="philosophy-card__footer">
              <span>Партнеры: S&P Global, MSCI ESG, CBRE Research</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container grid-2">
          <div>
            <p className="section-label">Почему доверяют</p>
            <ul className="list-soft">
              {reasons.map((reason) => (
                <li key={reason}>{reason}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="section-label">Партнёры</p>
            <div className="partners-grid">
              {partners.map((partner) => (
                <span key={partner}>{partner}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

