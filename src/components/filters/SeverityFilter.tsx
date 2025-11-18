import { FireSeverity } from "../../constants/wildfireConstants";
import { useMapFilters } from "../../context/useMapFilters";

function SeverityFilter() {
  const { filters, setFilters } = useMapFilters();

  function toggle(value: string) {
    setFilters((prev) => ({
      ...prev,
      severity: (() => {
        const next = new Set(prev.severity);
        next.has(value) ? next.delete(value) : next.add(value);
        return next;
      })(),
    }));
  }

  return (
    <div>
      {FireSeverity.map((severity) => (
        <label key={severity} className="flex items-center gap-2">
          <input
            key={severity}
            type="checkbox"
            name={severity}
            checked={filters.severity.has(severity)}
            onChange={() => toggle(severity)}
          />
          <span>{severity}</span>
        </label>
      ))}
    </div>
  );
}

export default SeverityFilter;
