import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import PopupWithRedux from '../popup';

export default class MyMap extends Component {
  componentDidUpdate() {
    console.log(this.Elem);
  }

  render() {
    const position = [53.8999964, 27.5666644];
    return (
      <div>
        <Map
          center={position}
          zoom={13}
          maxZoom={18}
          style={{ height: 500 }}
          onClick={() => this.forceUpdate()}
        >
          <TileLayer
            url="http://tiles.maps.sputnik.ru/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              <PopupWithRedux />
            </Popup>
          </Marker>
          <MarkerClusterGroup
            ref={node => {
              this.Elem = node;
            }}
          >
            <Marker position={[53.91, 27.61]}>
              <Popup>
                <h3>Popup 1</h3>
                <PopupWithRedux />
              </Popup>
            </Marker>
            <Marker position={[53.911, 27.611]}>
              <Popup>
                <h3>Popup 2</h3>
                <PopupWithRedux />
              </Popup>
            </Marker>
            <Marker position={[53.912, 27.612]}>
              <Popup>
                <h3>Popup 3</h3>
                <PopupWithRedux />
              </Popup>
            </Marker>
            <Marker position={[53.913, 27.613]}>
              <Popup>
                <h3>Popup 4</h3>
                <PopupWithRedux />
              </Popup>
            </Marker>
            <Marker position={[53.913, 27.613]}>
              <Popup>
                <h3>Popup 5</h3>
                <PopupWithRedux />
              </Popup>
            </Marker>
            <Marker position={[53.913, 27.613]}>
              <Popup>
                <h3>Popup 6</h3>
                <PopupWithRedux />
              </Popup>
            </Marker>
          </MarkerClusterGroup>
        </Map>
        {this.Elem &&
          this.Elem.props.children.map((item, i) =>
            React.createElement(() => item.props.children.props.children, {
              key: i
            })
          )}
      </div>
    );
  }
}
