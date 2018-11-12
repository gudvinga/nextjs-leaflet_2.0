import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';

const position = [53.8999964, 27.5666644];

export default () => (
  <div>
    <Map center={position} zoom={13} maxZoom={18} style={{ height: 500 }}>
      <TileLayer
        url="http://tiles.maps.sputnik.ru/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup.
          <br />
          Easily customizable.
        </Popup>
      </Marker>
      <MarkerClusterGroup>
        <Marker position={[53.910, 27.610]} />
        <Marker position={[53.911, 27.611]} />
        <Marker position={[53.912, 27.612]} />
        <Marker position={[53.913, 27.613]} />
      </MarkerClusterGroup>
    </Map>
  </div>
);
