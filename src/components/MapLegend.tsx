import { FireSeverity, severityToColor } from "../constants/wildfireConstants";

function MapLegend() {
  return (
    <div className="absolute bottom-8 right-4 w-60 bg-black/80 rounded-md shadow-lg p-4 z-10 text-white flex flex-col gap-3">
      {FireSeverity.map((severity) => (
        <div key={severity} className="flex items-center gap-3">
          <div
            className="w-4 h-4 rounded-sm"
            style={{ backgroundColor: severityToColor[severity] }}
          />
          <span className="text-sm">{severity}</span>
        </div>
      ))}
    </div>
  );
}

export default MapLegend;
