import LayersRoundedIcon from '@mui/icons-material/LayersRounded';

function MapLayersButton() {
    return (
        <div className="relative group">
            <button className="map-toolbar-btn">
                <LayersRoundedIcon fontSize="large"/>
            </button>

            <div className="map-toolbar-tooltip">
                Edit Map Layers
            </div>
        </div>
    );
}

export default MapLayersButton;