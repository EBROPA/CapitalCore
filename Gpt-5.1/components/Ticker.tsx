interface TickerItem {
  label: string;
  trend?: "up" | "down";
}

interface TickerProps {
  items: TickerItem[];
}

export default function Ticker({ items }: TickerProps) {
  const renderItems = [...items, ...items, ...items];

  return (
    <div className="ticker">
      <div className="ticker-track">
        {renderItems.map((item, idx) => (
          <span
            key={`${item.label}-${idx}`}
            className={item.trend ? `ticker-pill is-${item.trend}` : "ticker-pill"}
            aria-hidden={idx >= items.length}
          >
            {item.label}
            {item.trend === "up" && <span aria-hidden="true">▲</span>}
            {item.trend === "down" && <span aria-hidden="true">▼</span>}
          </span>
        ))}
      </div>
    </div>
  );
}

