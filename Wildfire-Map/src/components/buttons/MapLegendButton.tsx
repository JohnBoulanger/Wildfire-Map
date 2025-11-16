import LegendToggleRoundedIcon from "@mui/icons-material/LegendToggleRounded";

function MapLegendButton() {
  return (
    <div className="relative group">
      <button type="button" className="map-toolbar-btn">
        <LegendToggleRoundedIcon fontSize="large" />
      </button>

      <div className="map-toolbar-tooltip">Toggle Map Legend</div>
    </div>
  );
}

export default MapLegendButton;
