import { useState, useEffect } from "react";
import type { FireData } from "../constants/wildfireConstants";

interface FireInfoPanelProps {
  marker: FireData;
  onClose: () => void;
}

function FireInfoPanel({ marker, onClose }: FireInfoPanelProps) {
  const [fireData, setFireData] = useState<any>(null);
  const [_loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFireData() {
      try {
        const location = `${marker.lat},${marker.lon}`;
        const res = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=b3f491c61df1461e8d6165522251611&q=${encodeURIComponent(
            location,
          )}`,
        );
        if (!res.ok) throw new Error("Failed to fetch weather data");
        const data = await res.json();
        setFireData(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadFireData();
  }, [marker]);

  return (
    <div className="absolute left-4 top-1/2 -translate-y-[52%] w-1/3 h-14/15 bg-black/80 rounded-md shadow-lg p-4 z-10 text-white flex flex-col gap-4">
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4.5 right-3 text-white/70 hover:text-red-600 text-xl leading-none"
      >
        ×
      </button>

      <h2 className="text-2xl font-semibold border-b border-white/20 pb-2">
        {fireData?.location.name}, {fireData?.location.region},{" "}
        {fireData?.location.country}
      </h2>

      <div className="flex flex-col gap-2 text-sm">
        <div className="flex justify-between">
          <span className="font-medium text-white/70">Severity:</span>
          <span className="font-semibold">{marker.severity}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium text-white/70">Coordinates:</span>
          <span className="font-semibold">
            {marker.lat}, {marker.lon}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium text-white/70">Temperature:</span>
          <span className="font-semibold">{fireData?.current.temp_c} °C</span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium text-white/70">Wind:</span>
          <span className="font-semibold">
            {fireData?.current.wind_kph} km/h ({fireData?.current.wind_dir})
          </span>
        </div>

        <div className="grow" />

        <div className="w-full flex justify-center mb-4">
          <div className="translate-y-1/5 w-4/5 h-80 bg-white/10 border border-white/20 rounded-md flex items-center justify-center text-white/60 text-lg">
            <img src={marker.imagePath} alt="" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FireInfoPanel;
