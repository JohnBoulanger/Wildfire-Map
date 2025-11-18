import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import { severityToColor, type FireData } from "../constants/wildfireConstants";
import { useMap } from "../context/useMap";
import { useMapFilters } from "../context/useMapFilters";

interface FireMarkerProps {
  marker: FireData;
  isActive: boolean;
  onClick: (marker: FireData) => void;
}

const FireMarker = ({ marker, isActive, onClick }: FireMarkerProps) => {
  const { map } = useMap();
  const { filters } = useMapFilters();
  const markerRef = useRef<mapboxgl.Marker | null>(null);

  function inFilter(): boolean {
    if (!filters.severity.has(marker.severity)) return false;

    const { start, end } = filters.date;
    const fireTime = new Date(marker.date).getTime();

    if (start) {
      const startTime = new Date(start).getTime();
      if (fireTime < startTime) return false;
    }

    if (end) {
      const endTime = new Date(end).getTime();
      if (fireTime > endTime) return false;
    }

    return true;
  }

  useEffect(() => {
    if (!map.current || !inFilter()) return;
    console.log(filters);
    markerRef.current = new mapboxgl.Marker({
      color: severityToColor[marker.severity],
      scale: isActive ? 1.8 : 1,
    })
      .setLngLat([marker.lon, marker.lat])
      .addTo(map.current);

    // attach click listener to the default marker element
    const element = markerRef.current.getElement();
    const handler = () => onClick(marker);
    element.addEventListener("click", handler);

    return () => {
      element.removeEventListener("click", handler);
      markerRef.current?.remove();
    };
  }, [isActive, filters]);

  return null;
};

export default FireMarker;
