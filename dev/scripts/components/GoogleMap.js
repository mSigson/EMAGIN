import React from 'react';
import ReactDOM from 'react-dom';
import ReactHighcharts from 'react-highcharts';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class GoogleMap extends React.Component { 
    render() {
      return (
        <Map google={this.props.google}
            style={{width: '80%', height: '80%', position: 'relative'}}
            className={'map'}
            zoom={14}>
            <Marker
                title={'The marker`s title will appear as a tooltip.'}
                name={'SOMA'}
                position={{lat: 37.778519, lng: -122.405640}} />
            {/* <Marker
                name={'Dolores park'}
                position={{lat: 37.759703, lng: -122.428093}} />
            <Marker
                name={'Your position'}
                position={{lat: 37.762391, lng: -122.439192}}
                icon={{
                url: "/path/to/custom_icon.png",
                anchor: new google.maps.Point(32,32),
                scaledSize: new google.maps.Size(64,64)
                }} /> */}
        </Map>
      )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyChAVeWn4OYB0sKtR0QN7IyYfYL85O3tQ8')
  })(GoogleMap)