import MapRoundedIcon from '@mui/icons-material/MapRounded';

function MapStyleButton() {
    return (
        <div className="relative group">
            <button className="map-toolbar-btn">
                <MapRoundedIcon fontSize="large"/>
            </button>

            <div className="map-toolbar-tooltip">
                Edit Map Style
            </div>
        </div>
    );
}

export default MapStyleButton;