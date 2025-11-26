import Image from "next/image";
import Link from "next/link";
import RoiCalculator from "../components/RoiCalculator";
import Ticker from "../components/Ticker";
import { properties } from "../data/properties";

const metrics = [
  { value: "₽5 млрд", label: "объём сделок за 2024 год" },
  { value: "12.8%", label: "средняя доходность портфелей клиентов" },
  { value: "30+", label: "эксклюзивных мандатов в работе" }
];

const servicesPreview = [
  {
    title: "Подбор объектов",
    icon: "⇢",
    text: "Аналитика локаций, потоков, арендаторов. Быстрые проверки доходности."
  },
  {
    title: "Оценка и инвест-анализ",
    icon: "≈",
    text: "DCF, IRR, мультипликаторы, стресс-тесты и сценарии."
  },
  {
    title: "Юридическое сопровождение",
    icon: "⚖︎",
    text: "DD, структурирование, договоры, взаимодействие с банками."
  }
];

const advantages = [
  {
    title: "Эксклюзивная аналитика",
    text: "Собственные модели оценки рисков, потоков и арендных ставок для каждого района."
  },
  {
    title: "Команда из инвестиционного банка",
    text: "Стандарты отчётности и контроль качества на уровне top-tier IB."
  },
  {
    title: "Прозрачное сопровождение",
    text: "Еженедельные отчёты, единый менеджер проекта, безопасные расчёты."
  }
];

const testimonials = [
  {
    quote:
      "«CapitalCore предложили off-market сделку для семейного офиса. Сделку закрыли за 42 дня, получили 14% доходности с защитой вниз.»",
    label: "Семейный офис",
    metric: "IRR 14.2%"
  },
  {
    quote:
      "«Команда обновила портфель street-retail, увеличив NOI на 27% за счёт переформатирования арендаторов и CAPEX-плана.»",
    label: "Retail фонд",
    metric: "NOI +27%"
  },
  {
    quote:
      "«Комплексное юридическое сопровождение и финансирование сделки на ₽2,3 млрд без задержек и рисков для инвестора.»",
    label: "Private equity",
    metric: "Сделка ₽2.3B"
  }
];

const tickerItems = [
  { label: "Москва-Сити · CAP RATE 8.2%", trend: "down" as const },
  { label: "Street Retail · NOI +27% YoY", trend: "up" as const },
  { label: "Инвест-лоты · 9.1 лет окупаемость", trend: "up" as const },
  { label: "Мосбиржа · Индекс IMOEX 3 410 (+0.7%)", trend: "up" as const },
  { label: "USD/RUB · 92.30 (-0.4%)", trend: "down" as const }
];

const catalogPreview = properties.slice(0, 2);

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container grid-2 hero-grid">
          <div className="hero-content" data-parallax="0.05">
            <div className="hero-video-mobile" aria-hidden="true">
              <video
                className="hero-video-mobile__media"
                autoPlay
                muted
                loop
                playsInline
                poster="/media/hero-mobile.png"
              >
                <source
                  src="https://cdn.coverr.co/videos/coverr-aerial-shot-of-the-city-2561/1080p.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <span className="badge hero-badge">
              <span className="brand-inline">
                <span className="logo-part-1">CAPITAL</span>
                <span className="logo-part-2">CORE</span>
              </span>
              <span className="hero-badge__divider">·</span>
              <span className="hero-badge__caption">С 2023 года</span>
            </span>
            <h1 className="hero-headline">
              CapitalCore — коммерческая недвижимость премиум-класса
            </h1>
            <p className="hero-subtitle">
              Покупка, продажа, оценка и сопровождение сделок под ключ. Команды аналитиков,
              брокеров и юристов с многолетним опытом сделок в Москве и Европе.
            </p>
            <div className="hero-cta">
              <Link className="btn btn-primary" href="#lead-form">
                Получить подборку объектов
              </Link>
              <Link className="btn btn-outline" href="/catalog">
                Смотреть каталог
              </Link>
            </div>
            <Link className="market-link" href="/market">
              Market Data · актуальные ставки и рост площадей →
            </Link>
            <div className="metrics-grid">
              {metrics.map((metric) => (
                <article key={metric.label} className="metric-card">
                  <h3>{metric.value}</h3>
                  <p>{metric.label}</p>
                </article>
              ))}
            </div>
            <div className="hero-mobile-panel">
              <div className="hero-mobile-card">
                <span>Новый проект</span>
                <strong>Кластер «Деловой Центр»</strong>
                <p>IRR 15.4% · закрытие за 68 дней</p>
              </div>
              <div className="hero-mobile-chips">
                <span>72ч DD</span>
                <span>Data-room</span>
                <span>Team 24/7</span>
              </div>
            </div>
          </div>
          <div className="hero-visual" data-parallax="0.12">
            <div className="visual-panel">
              <div className="visual-floating-card">
                <small>Новый проект</small>
                <strong>Кластер «Деловой Центр»</strong>
                <p className="visual-floating-card__meta">IRR 15.4% · срок сделки 68 дней</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services-preview">
        <div className="container">
          <p className="section-label">Услуги</p>
          <div className="grid-2">
            <div className="reveal stack">
              <h2 className="section-title">Полный цикл сопровождения коммерческой недвижимости</h2>
              <p className="section-desc">
                Структурируем сделки любой сложности: от поиска и структурирования до юридического
                и финансового закрытия. Каждый проект — с выделенной командой и прозрачной
                отчетностью.
              </p>
              <Link className="btn btn-outline" href="/services">
                Все услуги
              </Link>
            </div>
            <div className="grid-3">
              {servicesPreview.map((service) => (
                <article key={service.title} className="card reveal">
                  <span className="icon-pill">{service.icon}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="catalog-preview">
        <div className="container">
          <p className="section-label">Каталог</p>
          <div className="grid-2">
            <div className="reveal">
              <h2 className="section-title">Избранные объекты с высокой доходностью</h2>
              <p className="section-desc">
                Доступ к закрытым предложениям street-retail, офисных центров, инвестиционных лотов и
                целых зданий. Каждый объект проходит собственный due diligence.
              </p>
            </div>
            <div className="reveal">
              <div className="mini-card-grid mini-card-grid--visual">
                {catalogPreview.map((item) => {
                  const price = item.meta.find((meta) => meta.label.toLowerCase().includes("цена"));
                  return (
                    <article
                      key={item.slug}
                      className="mini-card mini-card--visual interactive-card interactive-card--soft"
                    >
                      <div className="mini-card__media">
                        <Image
                          src={item.heroImage}
                          alt={item.title}
                          fill
                          sizes="(min-width: 1024px) 300px, 100vw"
                        />
                      </div>
                      <div className="mini-card__body">
                        <div className="mini-card__tag">{item.tag}</div>
                        <h3>{item.title}</h3>
                        <p className="section-desc">{item.description}</p>
                        <div className="mini-card__price">
                          <span>Стоимость</span>
                          <strong>{price?.value ?? "По запросу"}</strong>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
              <Link className="btn btn-outline" href="/catalog">
                Перейти в каталог
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="advantages">
        <div className="container">
          <p className="section-label">Преимущества</p>
          <div className="grid-3">
            {advantages.map((item) => (
              <article key={item.title} className="card reveal">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="cases">
        <div className="container">
          <p className="section-label">Отзывы и кейсы</p>
          <h2 className="section-title">Инвестиционные кейсы, подтверждённые цифрами</h2>
          <div className="testimonials">
            {testimonials.map((caseEntry) => (
              <article key={caseEntry.metric} className="testimonial reveal">
                <p>{caseEntry.quote}</p>
                <div className="case-meta">
                  <span>{caseEntry.label}</span>
                  <span>{caseEntry.metric}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="roi" className="roi-section">
        <div className="motion-orb orb-lg" style={{ bottom: "-160px", left: "-120px" }} />
        <div className="container">
          <div className="roi-header reveal">
            <div>
              <p className="section-label">Калькулятор ROI</p>
              <h2 className="section-title">Моментальный расчёт доходности по коммерческому объекту</h2>
              <p className="section-desc">
                Впишите параметры сделки и получите ориентир по доходности и сроку окупаемости. Алгоритм
                учитывает вакансию и ежемесячные расходы, а также подсказывает, когда имеет смысл подключить
                проектное финансирование.
              </p>
            </div>
            <Link className="market-link" href="/market">
              Смотреть Market Data →
            </Link>
          </div>
          <div className="roi-grid">
            <RoiCalculator />
          </div>
        </div>
        <Ticker items={tickerItems} />
      </section>

      <section id="lead-form">
        <div className="container grid-2">
          <div className="reveal">
            <p className="section-label">Запрос</p>
            <h2 className="section-title">Получите персональную подборку активов за 48 часов</h2>
            <p className="section-desc">
              Отправьте свои критерии — команда аналитиков подготовит короткий short-list с
              доходностью, рисками и прогнозом окупаемости.
            </p>
          </div>
          <div className="form-card reveal">
            <form>
              <label>
                Имя
                <input type="text" name="name" placeholder="Как к вам обращаться" required />
              </label>
              <label>
                Телефон
                <input type="tel" name="phone" placeholder="+7 (999) 000-00-00" required />
              </label>
              <label>
                Интересующие типы объектов
                <select name="type" defaultValue="Street retail">
                  <option>Street retail</option>
                  <option>Офисы</option>
                  <option>Здания</option>
                  <option>Инвест-лоты</option>
                </select>
              </label>
              <label>
                Комментарий
                <textarea name="comment" placeholder="Цели инвестиций, бюджет, горизонты" />
              </label>
              <button type="submit" className="btn btn-primary">
                Отправить запрос
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

