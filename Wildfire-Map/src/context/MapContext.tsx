import { createContext, useContext, useRef } from "react";

type MapContextType = {
  map: React.RefObject<mapboxgl.Map | null>;
  geolocate: React.RefObject<mapboxgl.GeolocateControl | null>;
};

const MapContext = createContext<MapContextType | null>(null);

export function MapProvider({ children }: { children: React.ReactNode }) {
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const geolocateRef = useRef<mapboxgl.GeolocateControl | null>(null);

  return (
    <MapContext.Provider value={{ map: mapRef, geolocate: geolocateRef }}>
      {children}
    </MapContext.Provider>
  );
}

export function useMap() {
  const ctx = useContext(MapContext);
  if (!ctx) throw new Error("useMap must be used inside <MapProvider>");
  return ctx;
}
