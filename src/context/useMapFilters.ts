import { useContext } from "react";
import { MapFilterContext } from "./MapFilterContext";

export function useMapFilters() {
  const ctx = useContext(MapFilterContext);
  if (!ctx)
    throw new Error("useMapFilters must be used inside MapFilterProvider");
  return ctx;
}
