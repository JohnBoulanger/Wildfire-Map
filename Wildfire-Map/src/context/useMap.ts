import { useContext } from "react";
import { MapContext } from "./MapContext";

export function useMap() {
  const ctx = useContext(MapContext);
  if (!ctx) throw new Error("useMap must be used inside <MapProvider>");
  return ctx;
}
