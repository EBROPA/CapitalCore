import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { properties } from "../../../data/properties";
import wewallSource from "../../../wewall_data.json";

type SourceEntry = {
  slug: string;
  description?: string;
  parameters?: { label: string; value: string }[];
  schemes?: { type: string; info: { label: string; value: string }[] }[];
};

const sourceMap = new Map(
  (wewallSource as SourceEntry[]).map((entry) => [entry.slug, entry])
);

export async function generateStaticParams() {
  return properties.map((property) => ({ slug: property.slug }));
}

export async function generateMetadata({
  params
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const property = properties.find((item) => item.slug === params.slug);
  if (!property) {
    return {
      title: "Объект не найден — CapitalCore"
    };
  }
  return {
    title: `${property.title} — CapitalCore`,
    description: property.description
  };
}

export default function ObjectDetailPage({
  params
}: {
  params: { slug: string };
}) {
  const property = properties.find((item) => item.slug === params.slug);
  if (!property) {
    notFound();
  }

  const source =
    (property.sourceSlug && sourceMap.get(property.sourceSlug)) ??
    sourceMap.get(property.slug);

  return (
    <div>
      <section className="page-hero property-hero">
        <div className="container property-hero__grid">
          <div>
            <p className="breadcrumbs">
              <Link href="/catalog">Каталог</Link> · {property.tag}
            </p>
            <h1 className="section-title">{property.title}</h1>
            <p className="section-desc">{property.description}</p>
            <div className="property-meta-grid">
              {property.meta.map((entry) => (
                <div key={entry.label}>
                  <span>{entry.label}</span>
                  <strong>{entry.value}</strong>
                </div>
              ))}
            </div>
            <div className="property-cta-inline">
              <button
                type="button"
                className="btn btn-primary"
                data-modal-target="contact"
              >
                Обсудить объект
              </button>
              <Link className="btn btn-outline" href="/catalog">
                Вернуться в каталог
              </Link>
            </div>
          </div>
          <div className="property-hero__media">
            <Image
              src={property.heroImage}
              alt={property.title}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
          </div>
        </div>
      </section>

      {source && (
        <section className="property-detail">
          <div className="container property-detail__grid">
            <div className="card">
              <h3>Ключевые параметры</h3>
              <ul className="list-soft">
                {source.parameters?.map((item) => (
                  <li key={`${item.label}-${item.value}`}>
                    <strong>{item.value}</strong>
                    {item.label && <span> · {item.label}</span>}
                  </li>
                )) ?? <li>Актуальные параметры уточняются у менеджера.</li>}
              </ul>
            </div>
            {source.schemes?.length ? (
              <div className="card property-schemes">
                <h3>Коммерческие условия</h3>
                <div className="property-schemes__grid">
                  {source.schemes.map((scheme) => (
                    <article key={scheme.type}>
                      <span>{scheme.type.toUpperCase()}</span>
                      <ul>
                        {scheme.info.map((info) => (
                          <li key={`${info.label}-${info.value}`}>
                            {info.label && <strong>{info.label}: </strong>}
                            {info.value}
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </div>
            ) : (
              <div className="card">
                <h3>Коммерческие условия</h3>
                <p className="section-desc">
                  Персональные коммерческие условия доступны по запросу.
                </p>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
}


