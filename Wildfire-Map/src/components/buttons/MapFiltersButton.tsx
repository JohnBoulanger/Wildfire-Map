import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';import { useState } from "react";
import SeverityFilter from "../filters/SeverityFilter";
import LocationFilter from "../filters/LocationFilter";
import DateFilter from "../filters/DateFilter";
import MapFiltersDropdown from '../MapFiltersDropdown';

const tabs = ["Severity", "Location", "Date"] as const;

function MapFiltersButton() {
  const [activeTab, setActiveTab] = useState("Severity");

  return (
    <div className="relative group">
      <MapFiltersDropdown
        button={
          <button type="button" className="map-toolbar-btn">
            <FilterAltRoundedIcon fontSize="large" />
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
      </MapFiltersDropdown>

      <div className="map-toolbar-tooltip">Edit Map Filters</div>
    </div>
  );
}

export default MapFiltersButton;
