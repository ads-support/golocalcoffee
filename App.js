<script src="http://localhost:8097"></script>
import React, { Component } from 'react';
import { ImageBackground} from 'react-native';
import { Toolbar } from 'react-native-material-ui';
import {
  Platform,
  StyleSheet,
  Dimensions,
  Text,
  Button,
  View,
  Image,
  StatusBar
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Logo from './icon.png';
import Border from './border.png';
import Background from './launch_screen.jpg';
import ApolloSetup from './ApolloSetup';

export default class App extends Component {
  // componentDidMount() {
  //   SplashScreen.hide()
  // }

  render() {
    SplashScreen.hide();
    
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
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            // backgroundColor: 'blue'
          }}
        >
          <ImageBackground
            source={Background}
            style={{
              height: Dimensions.get("window").height,
              width: Dimensions.get("window").width
            }}
            resizeMode="cover"
          >
            <View style={styles.backgroundContainer}>
              <Image
                style={{
                  marginTop: '4.5%',
                  alignSelf: 'center',
                  height: '100%',
                  width: '100%'
                }}
                resizeMode="contain"
                source={Border}
              />
              
            </View>
            <View style = {styles.overlay}>
            {/* <Image style = {styles.logo} resizeMode="contain" source = {Logo} />
            <Button
              style = {{marginTop:40}}
              color="#e37e40"
              title="Get Started"
              onPress={() => Alert.alert('Simple Button pressed')}
            /> */}
            <ApolloSetup/>
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  backgroundContainer: {
    position: 'relative',
    top:20
  },
  container: {
    flex:1
  },
  backdrop:{
    width:360,
    height:639,
    marginHorizontal:10
  },
  overlay: {
    opacity: 0.5,
    position:'absolute',
    alignItems:'center'
  },
  logo: {
    marginHorizontal:70,
    marginVertical:20,
    width:262,
    height:320,
    top:100
  },
  toolbar: {
    alignItems: 'center',
    backgroundColor:'red'
}
});