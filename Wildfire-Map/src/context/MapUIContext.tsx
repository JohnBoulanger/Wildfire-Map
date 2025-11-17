import { createContext, useState } from "react";

interface MapUIState {
  legendOpen: boolean;
}

interface MapUIContextType {
  ui: MapUIState;
  setUI: React.Dispatch<React.SetStateAction<MapUIState>>;
}

const MapUIContext = createContext<MapUIContextType | null>(null);

export function MapUIProvider({ children }: { children: React.ReactNode }) {
  const [ui, setUI] = useState<MapUIState>({
    legendOpen: false,
  });

  return (
    <MapUIContext.Provider value={{ ui, setUI }}>
      {children}
    </MapUIContext.Provider>
  );
}

export default MapUIContext;
