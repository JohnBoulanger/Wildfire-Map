import MapFiltersButton from "./buttons/MapFiltersButton";
import MapLegendButton from "./buttons/MapLegendButton";
import MapStyleButton from "./buttons/MapStyleButton";
import MyLocationButton from "./buttons/MyLocationButton";

function MapToolbar() {
  return (
    <div className="absolute top-4 right-4 flex flex-col gap-2 bg-white/40 rounded-md shadow-lg p-1.5 z-10">
      <MapFiltersButton />
      <MapStyleButton />
      <MyLocationButton />
      <MapLegendButton />
    </div>
  );
}

export default MapToolbar;
