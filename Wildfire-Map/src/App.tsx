import "./App.css";
import MapView from "./components/MapView";
import { MapProvider } from "./context/MapContext";

function App() {
  return (
    <MapProvider>
      <MapView />
    </MapProvider>
  );
}

export default App;
