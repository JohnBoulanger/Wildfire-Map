import LayersRoundedIcon from "@mui/icons-material/LayersRounded";
import { useState } from "react";
import MapLayersDropdown from "../MapLayersDropdown";
import SeverityFilter from "../filters/SeverityFilter";
import LocationFilter from "../filters/LocationFilter";
import DateFilter from "../filters/DateFilter";

const tabs = ["Severity", "Location", "Date"] as const;

function MapLayersButton() {
  const [activeTab, setActiveTab] = useState("Severity");

  return (
    <div className="relative group">
      <MapLayersDropdown
        button={
          <button type="button" className="map-toolbar-btn">
            <LayersRoundedIcon fontSize="large" />
          </button>
        }
        align="right"
      >
        <div className="justify-items-center">
          <div className="w-64 p-2">
            <div className="flex border-b mb-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  className={`flex-1 py-2 text-sm ${
                    activeTab === tab
                      ? "font-semibold border-b-2 border-black"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
            {activeTab === "Severity" && <SeverityFilter />}
            {activeTab === "Location" && <LocationFilter />}
            {activeTab === "Date" && <DateFilter />}
            <div></div>
          </div>
        </div>
      </MapLayersDropdown>

      <div className="map-toolbar-tooltip">Edit Map Layers</div>
    </div>
  );
}

export default MapLayersButton;
