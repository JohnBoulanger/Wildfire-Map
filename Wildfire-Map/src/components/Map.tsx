import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import MapToolbar from "./MapToolbar";
import { useMap } from "../context/MapContext";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

function Map() {
    const mapContainerRef = useRef<HTMLDivElement | null>(null);
    const { map, geolocate } = useMap();

    useEffect(() => {
        if (!mapContainerRef.current) return;

        // 1. Initialize the Map
        map.current = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: "mapbox://styles/johnboulanger/cmi0mloo9008g01s4bvqj2kh6",
            center: [-115.57, 51.18], // Center for Banff area
            zoom: 7,
        });

        // Add the Geolocate Control (keep this here)
        const geolocateControl = new mapboxgl.GeolocateControl({
            // ... (Your existing Geolocate setup) ...
        });
        map.current.addControl(geolocateControl);
        geolocate.current = geolocateControl;
        
        // --- ADD THE MARKER ONCE THE MAP HAS LOADED ---
        map.current.on('load', () => {
            new mapboxgl.Marker()
                .setLngLat([-115.57, 51.18])
                .addTo(map.current!); // Use ! since we're inside the 'load' handler
        });

        // Cleanup function
        return () => map.current?.remove();
    }, []);

    return (
        <div className="relative w-screen h-screen">
            <div className="w-full h-full" ref={mapContainerRef} />
            <MapToolbar />
        </div>
    );
}

export default Map;