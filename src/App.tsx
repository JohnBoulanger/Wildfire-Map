import "./App.css";
import MapView from "./components/MapView";
import { MapProvider } from "./context/MapContext";
import { MapFilterProvider } from "./context/MapFilterContext";
import { MapUIProvider } from "./context/MapUIContext";

function App() {
  return (
    <MapProvider>
      <MapUIProvider>
        <MapFilterProvider>
          <MapView />
        </MapFilterProvider>
      </MapUIProvider>
    </MapProvider>
  );
}

export default App;
