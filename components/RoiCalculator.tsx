"use client";

import { FormEvent, useState } from "react";

interface RoiResult {
  roi: string;
  payback: string;
  cashflow: string;
}

const initial: RoiResult = { roi: "—", payback: "—", cashflow: "—" };

export default function RoiCalculator() {
  const [result, setResult] = useState<RoiResult>(initial);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const parseNumeric = (value: FormDataEntryValue | null) =>
      Number(String(value ?? "").replace(/\s+/g, ""));
    const purchase = parseNumeric(data.get("purchase"));
    const rent = parseNumeric(data.get("rent"));
    const expenses = parseNumeric(data.get("expenses"));
    const vacancy = Number(data.get("vacancy"));

    if (!purchase || !rent) {
      setResult({
        roi: "Введите корректные данные",
        payback: "—",
        cashflow: "—"
      });
      return;
    }

    const monthlyNet = (rent - expenses) * (1 - (vacancy || 0) / 100);
    const annualNet = monthlyNet * 12;
    const roiValue = (annualNet / purchase) * 100;
    const payback = annualNet > 0 ? purchase / annualNet : 0;

    setResult({
      roi: `${roiValue.toFixed(1)}%`,
      payback: annualNet > 0 ? `${payback.toFixed(1)} лет` : "—",
      cashflow: `${Math.round(monthlyNet).toLocaleString("ru-RU")} ₽`
    });
  };

  return (
    <>
      <form id="roi-calculator-form" className="roi-form" onSubmit={onSubmit}>
        <label>
          Стоимость покупки, ₽
          <input
            type="text"
            name="purchase"
            className="js-number-input"
            inputMode="numeric"
            placeholder="Например, 250 000 000"
            required
          />
        </label>
        <label>
          Ежемесячный арендный поток, ₽
          <input
            type="text"
            name="rent"
            className="js-number-input"
            inputMode="numeric"
            placeholder="Например, 2 800 000"
            required
          />
        </label>
        <label>
          Ежемесячные расходы, ₽
          <input
            type="text"
            name="expenses"
            className="js-number-input"
            inputMode="numeric"
            defaultValue="450 000"
          />
        </label>
        <label>
          Вакансия, %
          <input type="number" name="vacancy" defaultValue={5} />
        </label>
        <button className="btn btn-primary" type="submit">
          Рассчитать ROI
        </button>
      </form>
      <div className="roi-output reveal">
        <span>Ожидаемая доходность</span>
        <strong data-roi-value>{result.roi}</strong>
        <ul className="roi-metrics">
          <li>
            <span>Период окупаемости</span>
            <strong data-payback>{result.payback}</strong>
          </li>
          <li>
            <span>Чистый денежный поток (мес.)</span>
            <strong data-cashflow>{result.cashflow}</strong>
          </li>
          <li>
            <span>Бенчмарк по рынку</span>
            <strong>11.8% · офисы класс A</strong>
          </li>
        </ul>
        <p className="market-note">
          Цифры основаны на данных CapitalCore Research и открытых сделках (декабрь 2025).
        </p>
      </div>
    </>
  );
}

