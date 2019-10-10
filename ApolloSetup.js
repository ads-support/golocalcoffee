import React, {Component} from 'react';
//import your Platform for conditionally change the url based if it is on ios or android. 
//Since on android you would have set the url to your emulator, while on ios it would be set to localhost.
import { Platform } from 'react-native';
//import your ApolloProvider from react-apollo to wrap your app.
import { ApolloProvider} from 'react-apollo'; 
//import ApolloClient, InMemoryCache, and HttpLink to define your client to cnnect to your graphql server.//#endregion
import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-client-preset';
//import your Navigator so your application renders the initial route
import Navigator from './Navigator';

//Define your client for your APolloProvider connecting to your graphql server.
const client = new ApolloClient({
  //Assign to your cache property a instance of a InMemoryCache
  cache: new InMemoryCache(),
  //Assign your link with a new instance of a HttpLink linking to your graphql server.
  link: new HttpLink({uri: Platform.select({
      ios: 'https://golocalcoffee.com/graphql',
      android: 'https://golocalcoffee.com/graphql'
    })
  })
})

class ApolloSetup extends Component {
  render() {
    //Wrap your App with apolloProvider with your defined client.
    return (
      <ApolloProvider client={client}>
        <Navigator />
      </ApolloProvider>
    );
  }
}
export default ApolloSetup;