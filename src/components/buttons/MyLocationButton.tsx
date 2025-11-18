import GpsFixedRoundedIcon from "@mui/icons-material/GpsFixedRounded";
import { useMap } from "../../context/useMap";

function MyLocationButton() {
  const { geolocate } = useMap();

  return (
    <div className="relative group">
      <button
        type="button"
        onClick={() => geolocate.current?.trigger()}
        className="map-toolbar-btn"
      >
        <GpsFixedRoundedIcon fontSize="large" />
      </button>

      <div className="map-toolbar-tooltip">Show Current Location</div>
    </div>
  );
}

export default MyLocationButton;
