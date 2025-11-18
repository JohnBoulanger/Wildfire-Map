import { useContext } from "react";
import MapUIContext from "./MapUIContext";

export function useMapUI() {
  const ctx = useContext(MapUIContext);
  if (!ctx) throw new Error("useMapUI must be used inside MapUIProvider");
  return ctx;
}
