import MapRoundedIcon from "@mui/icons-material/MapRounded";
import MapStyleDropdown from "../MapStyleDropdown";
import { useState } from "react";
import { useMap } from "../../context/useMap";

const styleOptions = [
  {
    label: "Default",
    style: "mapbox://styles/johnboulanger/cmi0mloo9008g01s4bvqj2kh6",
  },
  { label: "Satellite", style: "mapbox://styles/mapbox/satellite-v9" },
  { label: "Streets", style: "mapbox://styles/mapbox/streets-v12" },
  { label: "Dark", style: "mapbox://styles/mapbox/dark-v11" },
  { label: "Outdoors", style: "mapbox://styles/mapbox/outdoors-v12" },
];

function MapStyleButton() {
  const { map } = useMap();
  const [activeStyle, setActiveStyle] = useState(styleOptions[0].style);

  return (
    <div className="relative group">
      <MapStyleDropdown
        button={
          <button type="button" className="map-toolbar-btn">
            <MapRoundedIcon fontSize="large" />
          </button>
        }
        align="right"
      >
        <div>
          {styleOptions.map((style) => {
            const isActive = style.style === activeStyle;
            return (
              <button
                type="button"
                className={`map-style-dropdown-item ${
                  isActive ? "bg-gray-200 font-semibold" : ""
                }`}
                onClick={() => {
                  map.current?.setStyle(style.style);
                  setActiveStyle(style.style);
                }}
                key={style.label}
              >
                {style.label}
              </button>
            );
          })}
        </div>
      </MapStyleDropdown>

      <div className="map-toolbar-tooltip">Edit Map Style</div>
    </div>
  );
}

export default MapStyleButton;
