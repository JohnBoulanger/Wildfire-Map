import { useMapFilters } from "../../context/useMapFilters";

function DateFilter() {
  const { filters, setFilters } = useMapFilters();

  function setDate(key: "start" | "end", value: string | null) {
    setFilters((prev) => ({
      ...prev,
      date: {
        ...prev.date,
        [key]: value,
      },
    }));
  }

  return (
    <div className="flex flex-col items-start gap-2">
      <div className="flex items-center gap-2">
        <label>Start: </label>
        <input
          type="date"
          id="start-date"
          value={filters.date.start || ""}
          onChange={(e) => setDate("start", e.target.value)}
        />
      </div>
      <div className="flex items-center gap-2">
        <label>End: </label>
        <input
          type="date"
          id="end-date"
          value={filters.date.end || ""}
          onChange={(e) => setDate("end", e.target.value)}
        />
      </div>
    </div>
  );
}

export default DateFilter;
