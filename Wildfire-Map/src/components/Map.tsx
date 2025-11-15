import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

function Map() {
    const mapRef = useRef(null);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapRef.current,
            center: [-115.57, 51.18], // [lat, lon]
            zoom: 7,
        });
        return () => map.remove();
    }, []);

    return <div ref={mapRef} style={{width: "1000px", height: "500px"}} />
}

export default Map;