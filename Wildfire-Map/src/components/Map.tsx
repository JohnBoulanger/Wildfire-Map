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

        map.current = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: "mapbox://styles/johnboulanger/cmi0mloo9008g01s4bvqj2kh6",
            center: [-115.57, 51.18],
            zoom: 7,
        });

        const geolocateControl = new mapboxgl.GeolocateControl({
            positionOptions: { enableHighAccuracy: true },
            trackUserLocation: true,
            showUserLocation: true,
        });
        map.current.addControl(geolocateControl);
        geolocate.current = geolocateControl;


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
