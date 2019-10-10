import React, { Component } from 'react';
import { Toolbar } from 'react-native-material-ui';
import {
  StyleSheet,
  View
} from 'react-native';
import MapView from 'react-native-maps';

class MapListing extends Component {

  render() {
    
    return (
      <View
        style={{
          flex: 1
        }}
      >        
         <Toolbar
        leftElement="menu"
        style = {styles.toolbar}
        centerElement="Searchable"
        searchable={{
          autoFocus: true,
          placeholder: 'Search',
        }}
        rightElement={{
            menu: {
                icon: "more-vert",
                labels: ["item 1", "item 2"]
            }
        }}
        onRightElementPress={ (label) => { console.log(label) }}
      />        
        <MapView
            region={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }}
        >
        </MapView>
      </View>
    );
  }
}

var styles = StyleSheet.create({
    toolbar: {
    alignItems: 'center',
    backgroundColor:'red'
}
});

export default MapListing;