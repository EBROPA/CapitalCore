"use client";

export default function ContactModal() {
  return (
    <div className="contact-modal" aria-hidden="true">
      <div className="contact-modal__backdrop" data-modal-close></div>
      <div className="contact-modal__panel" role="dialog" aria-modal="true">
        <button
          type="button"
          className="contact-modal__close"
          data-modal-close
          aria-label="Закрыть окно"
        >
          ×
        </button>
        <p className="contact-modal__eyebrow">CapitalCore · созвон</p>
        <h3>Узнайте подробности</h3>
        <p className="contact-modal__desc">
          Оставьте номер — ответим на вопросы, пришлём материалы и согласуем формат сотрудничества.
        </p>
        <form className="contact-modal__form js-inline-form">
          <label>
            Имя
            <input type="text" name="name" placeholder="Введите имя" required />
          </label>
          <label>
            Телефон
            <input
              type="tel"
              name="phone"
              className="js-phone-input"
              placeholder="+7 (___) ___-__-__"
              required
            />
          </label>
          <label className="policy-check">
            <input type="checkbox" required />
            <span>
              Я принимаю условия Политики обработки персональных данных и даю согласие на обработку
              персональных данных.
            </span>
          </label>
          <button type="submit" className="btn btn-primary" data-success-label="Мы свяжемся с вами">
            Перезвоните мне
          </button>
        </form>
      </div>
    </div>
  );
}


