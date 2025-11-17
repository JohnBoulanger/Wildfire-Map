import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import MapToolbar from "./MapToolbar";
import { wildfireMarkers, type FireData } from "../constants/wildfireConstants";
import FireMarker from "./FireMarker";
import FireInfoPanel from "./FireInfoPanel";
import { useMap } from "../context/useMap";
import MapLegend from "./MapLegend";
import { useMapUI } from "../context/useMapUI";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

function MapView() {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [activeMarker, setActiveMarker] = useState<FireData | null>();
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const { map, geolocate } = useMap();
  const { ui } = useMapUI();

  const legendOpen = ui.legendOpen;

  // setup the map
  // biome-ignore lint/correctness/useExhaustiveDependencies: Mapbox map should initialize only once
  useEffect(() => {
    if (!mapContainerRef.current) return;

    // initialize default map
    map.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/johnboulanger/cmi0mloo9008g01s4bvqj2kh6",
      center: [-115.57, 51.18],
      zoom: 7,
    });

    // setup geolocator
    const geolocateControl = new mapboxgl.GeolocateControl({
      positionOptions: { enableHighAccuracy: true },
      trackUserLocation: true,
      showUserLocation: true,
    });
    map.current.addControl(geolocateControl);
    geolocate.current = geolocateControl;

    // check if map has loaded
    map.current.on("load", () => setMapLoaded(true));

    return () => map.current?.remove();
  }, []);

  const handleMarkerClick = (marker: FireData) => {
    setActiveMarker(marker);
  };

  return (
    <div className="relative w-screen h-screen">
      <div className="w-full h-full" ref={mapContainerRef} />
      {mapLoaded &&
        wildfireMarkers &&
        wildfireMarkers.map((marker) => {
          return (
            <FireMarker
              key={marker.id}
              marker={marker}
              isActive={activeMarker?.id === marker.id}
              onClick={() => handleMarkerClick(marker)}
            />
          );
        })}
      {/* display fire info */}
      {activeMarker && (
        <FireInfoPanel
          marker={activeMarker}
          onClose={() => setActiveMarker(null)}
        />
      )}

      {/* display map legend */}
      {legendOpen && <MapLegend />}

      <MapToolbar />
    </div>
  );
}

export default MapView;
