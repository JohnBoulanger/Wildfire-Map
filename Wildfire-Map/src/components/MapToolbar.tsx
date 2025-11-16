import MapLayersButton from "./buttons/MapLayersButton";
import MapLegendButton from "./buttons/MapLegendButton";
import MapStyleButton from "./buttons/MapStyleButton";
import MyLocationButton from "./buttons/MyLocationButton";

function MapToolbar() {
  return (
    <div className="absolute top-4 right-4 flex flex-col gap-2 bg-white/25 rounded-md shadow-lg p-1.5 z-10">
      <MapLayersButton />
      <MapStyleButton />
      <MyLocationButton />
      <MapLegendButton />
    </div>
  );
}

export default MapToolbar;
