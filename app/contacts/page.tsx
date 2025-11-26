export default function ContactsPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumbs">Главная · Контакты</p>
          <h1 className="section-title">Связаться с CapitalCore</h1>
          <p className="section-desc">
            Свяжитесь с нами в удобном канале — ответ в течение 10 минут в рабочее время. Для
            срочных сделок доступен 24/7 трекер.
          </p>
        </div>
      </section>

      <section>
        <div className="container contact-grid">
          <div className="contact-card">
            <h3>Офис Москва</h3>
            <p>Москва, Бумажный пр-д, д. 19, Stone Towers</p>
            <p>
              +7 (495) 032-21-99
              <br />
              team@capitalcore.moscow
            </p>
          </div>
          <div className="contact-card">
            <h3>Региональные проекты</h3>
            <p>
              Поддерживаем дистанционно сделки по России и Европе: выездные инспекции, переговоры,
              юридическое сопровождение.
            </p>
            <p>
              +7 (495) 032-21-99
              <br />
              projects@capitalcore.moscow
            </p>
          </div>
          <div className="contact-card">
            <h3>Каналы связи</h3>
            <div className="contact-actions">
              <a className="btn btn-outline" href="tel:+74950322199">
                Позвонить
              </a>
              <a className="btn btn-outline" href="mailto:deal@capitalcore.moscow">
                Написать
              </a>
              <a
                className="btn btn-outline"
                href="https://t.me/capital_core"
                target="_blank"
                rel="noreferrer"
              >
                Telegram
              </a>
            </div>
          </div>
          <div className="contact-card">
            <h3>Собственник бизнеса</h3>
            <p>Гусев Никита Олегович · ОГРНИП 325774600205503 · ИНН 772465913434.</p>
            <p>Все договоры заключаются напрямую с ИП. Запросите пакет документов по email.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="container grid-2">
          <div className="form-card">
            <h3>Отправить заявку</h3>
            <form>
              <label>
                Имя
                <input type="text" name="name" placeholder="Имя" required />
              </label>
              <label>
                Email
                <input type="email" name="email" placeholder="you@company.com" required />
              </label>
              <label>
                Тип запроса
                <select name="request">
                  <option>Покупка</option>
                  <option>Продажа</option>
                  <option>Инвестиционный анализ</option>
                  <option>Юридическое сопровождение</option>
                </select>
              </label>
              <label>
                Сообщение
                <textarea placeholder="Опишите задачу" />
              </label>
              <button className="btn btn-primary" type="submit">
                Отправить
              </button>
            </form>
          </div>
          <div className="map-shell">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.1897030464275!2d37.53363237609333!3d55.74947357308588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a5a2f7d35dd%3A0x3ddfddbea8e1c78f!2z0JzQvtGB0LrQstCwINCf0LXQu9Cw0YfQtdGB0LrQvtC1!5e0!3m2!1sru!2sru!4v1732288080!5m2!1sru!2sru"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

