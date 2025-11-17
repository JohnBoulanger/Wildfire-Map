import { createContext, useState } from "react";
import {
  FireSeverity,
  CompatibleLocations,
} from "../constants/wildfireConstants";

interface MapFilterContextType {
  filters: MapFilterState;
  setFilters: React.Dispatch<React.SetStateAction<MapFilterState>>;
}

export interface MapFilterState {
  severity: Set<string>;
  location: Set<string>;
  date: {
    start: string | null;
    end: string | null;
  };
}

const defaultFilters: MapFilterState = {
  severity: new Set(FireSeverity),
  location: new Set(CompatibleLocations),
  date: {
    start: null,
    end: null,
  },
};

export function MapFilterProvider({ children }: { children: React.ReactNode }) {
  const [filters, setFilters] = useState<MapFilterState>(defaultFilters);

  return (
    <MapFilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </MapFilterContext.Provider>
  );
}

export const MapFilterContext = createContext<MapFilterContextType | null>(
  null,
);
