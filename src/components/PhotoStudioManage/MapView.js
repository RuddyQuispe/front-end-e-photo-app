import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import './MapView.css';
import { IconLocation } from './Icon'

export default class MapView extends Component {

    renderMarkers(){
        this.props.data.map(addressStudio => {
            const address = addressStudio.address.split(', ');
            let lat = address[0];
            let lng = address[1];
            return (
                <Marker key={addressStudio.id} position={{ lat, lng }} icon={IconLocation}>
                    <Popup>
                        {addressStudio.name}<br />
                # {addressStudio.id}
                    </Popup>
                </Marker>

            );
        })
    }
    render() {
        return (
            <Map center={{ lat: '-17.782800', lng: '-63.181367' }} zoom={14}>
                <TileLayer url="https://tiles.wmflabs.org/osm-no-labels/${z}/${x}/${y}.png" attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>
                {this.renderMarkers()}
            </Map>
        );
    }
}