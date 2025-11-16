import { useEffect, useRef } from "react"
import mapboxgl from 'mapbox-gl'
import { useMap } from "../context/MapContext";
import { severityToColor, type FireData } from "../constants/wildfireConstants";

interface FireMarkerProps {
    marker: FireData,
    isActive: boolean,
    onClick: (marker: FireData) => void;
}

const FireMarker = ({ marker, isActive, onClick }: FireMarkerProps ) => {
    const { map } = useMap();
    const markerRef = useRef<mapboxgl.Marker | null>(null);

    useEffect(() => {
        if (!map.current) return 
        markerRef.current = new mapboxgl.Marker({ color: isActive ? "#222222" : severityToColor[marker.severity]})
            .setLngLat([marker.lon, marker.lat]).addTo(map.current);

        // attach click listener to the default marker element
        const element = markerRef.current.getElement()
        const handler = () => onClick(marker)
        element.addEventListener("click", handler)

        return () => {
        element.removeEventListener("click", handler)
        markerRef.current?.remove()
        }

    }, [isActive])

    return null;
}

export default FireMarker;