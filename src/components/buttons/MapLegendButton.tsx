import LegendToggleRoundedIcon from "@mui/icons-material/LegendToggleRounded";
import { useMapUI } from "../../context/useMapUI";

function MapLegendButton() {
  const { ui, setUI } = useMapUI();
  const legendOpen = ui.legendOpen;

  return (
    <div className="relative group">
      <button
        type="button"
        className={`map-toolbar-btn ${legendOpen ? "bg-white" : ""}`}
        onClick={() =>
          setUI((prev) => ({ ...prev, legendOpen: !prev.legendOpen }))
        }
      >
        <LegendToggleRoundedIcon fontSize="large" />
      </button>

      <div className="map-toolbar-tooltip">Toggle Map Legend</div>
    </div>
  );
}

export default MapLegendButton;
