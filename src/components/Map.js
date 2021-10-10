import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Col } from 'react-bootstrap';
import { MAP_STYLES } from './store';

function SimpleMap() {

    const MapMarker = ({ text }) => <div><i className="fa fa-coffee fa-3x text-secondary"></i></div>;

    const mapSettings = {
        center: {
            lat: 34.13,
            lng: -118.28
        },
        zoom: 8,
    }

    return (
        // Important! Always set the container height explicitly
        <Col md={{ span: 8, order: 'last' }} style={{ height: '50vh' }}>
            <GoogleMapReact
                options={{
                    styles: MAP_STYLES
                }}
                bootstrapURLKeys={{ key: "AIzaSyARpBCxCRDgyJRiWbMKPh3KeCFRntpsh8A" }}
                defaultCenter={mapSettings.center}
                defaultZoom={mapSettings.zoom}
            >
                <MapMarker
                    lat={34.132}
                    lng={-118.280}
                    text="Los Angeles"
                />
                <MapMarker
                    lat={33.653}
                    lng={-117.754}
                    text="Irvine"
                />
                <MapMarker
                    lat={33.601}
                    lng={-117.899}
                    text="Newport"
                />
            </GoogleMapReact>
        </Col>
    );
}

export default SimpleMap;
