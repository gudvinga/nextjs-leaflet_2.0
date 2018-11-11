import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

const position = [53.8999964, 27.5666644];

export default () => (
  <div>
    <Map center={position} zoom={13} style={{ height: 500 }}>
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
    </Map>
  </div>
);
