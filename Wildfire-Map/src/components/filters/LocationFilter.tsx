import { CompatibleLocations } from "../../constants/wildfireConstants";
import { useMapFilters } from "../../context/useMapFilters";

function LocationFilter() {
  const { filters, setFilters } = useMapFilters();

  function toggle(value: string) {
    setFilters((prev) => ({
      ...prev,
      location: (() => {
        const next = new Set(prev.location);
        next.has(value) ? next.delete(value) : next.add(value);
        return next;
      })(),
    }));
  }

  return (
    <div>
      {CompatibleLocations.map((location) => (
        <label key={location} className="flex items-center gap-2">
          <input
            key={location}
            type="checkbox"
            value={location}
            checked={filters.location.has(location)}
            onClick={() => toggle(location)}
          />
          <span>{location}</span>
        </label>
      ))}
    </div>
  );
}

export default LocationFilter;
