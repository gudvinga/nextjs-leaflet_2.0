import React from 'react';
import dynamic from 'next/dynamic';
import style from './style.css'
import Head from '../src/components/head';

const Map = dynamic(() => import('../src/components/map'), {
  ssr: false
});

export default () => (
  <React.Fragment>
    <Head />
    <div className={style.wrapper}>
      <h1>Leaflet 2.0</h1>
      <Map />
    </div>
  </React.Fragment>
);
