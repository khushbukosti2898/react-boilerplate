/* eslint-disable max-len */
import React from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

// const googleMapApiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

const MyMapComponent = compose(
  withProps({
    // googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${googleMapApiKey}&v=3.exp&libraries=geometry,drawing,places`,
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
)((props) => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: 23.0225, lng: 72.5714 }}>
    {props.isMarkerShown && (
      <Marker position={{ lat: 23.0225, lng: 72.5714 }} />
    )}
  </GoogleMap>
));

export default () => {
  return <MyMapComponent isMarkerShown />;
};
