"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Property, PropertyType } from "../data/properties";

const filterOptions: { label: string; value: "all" | PropertyType }[] = [
  { label: "Все", value: "all" },
  { label: "Street retail", value: "retail" },
  { label: "Офисы", value: "office" },
  { label: "Здания", value: "building" },
  { label: "Инвест-лоты", value: "invest" }
];

interface CatalogGridProps {
  items: Property[];
}

export default function CatalogGrid({ items }: CatalogGridProps) {
  const [active, setActive] = useState<"all" | PropertyType>("all");

  const filtered = useMemo(() => {
    if (active === "all") return items;
    return items.filter((item) => item.type === active);
  }, [active, items]);

  return (
    <>
      <div className="filter-group">
        {filterOptions.map((option) => (
          <button
            key={option.value}
            type="button"
            className={option.value === active ? "is-active" : ""}
            onClick={() => setActive(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
      <div className="catalog-grid">
        {filtered.map((property) => (
          <Link
            key={property.slug}
            href={`/object/${property.slug}`}
            className="property-card reveal interactive-card interactive-card--strong"
            data-type={property.type}
          >
            <div className="property-card__media">
              <Image
                src={property.heroImage}
                alt={property.title}
                fill
                sizes="(min-width: 1024px) 320px, 100vw"
              />
              <span className="property-tag">{property.tag}</span>
            </div>
            <div className="property-card__body">
              <h3>{property.title}</h3>
              <p className="section-desc">{property.location}</p>
              <div className="property-meta">
                {property.meta.map((entry) => (
                  <span key={entry.label}>
                    {entry.label}
                    <br />
                    <strong>{entry.value}</strong>
                  </span>
                ))}
              </div>
              <p>{property.description}</p>
            </div>
          </Link>
        ))}
      </div>
      <p className="market-note">
        Данные подготовлены CapitalCore Research (декабрь 2025). Метрики верифицируем в течение 24
        часов после запроса.
      </p>
    </>
  );
}

