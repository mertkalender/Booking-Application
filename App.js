import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import SearchPage from "./SearchPage"
import ProfilePage from "./ProfilePage"
import SavedPage from "./SavedPage"
import MyBookingsPage from "./MyBookingsPage"
import {NavigationContainer, useNavigationState} from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Appbar } from 'react-native-paper';

const Tab = createMaterialBottomTabNavigator();

function App(){

  const [signedIn, setSıgnedIn] = useState(false)

  const _handleChat = () => console.log('Chat Screen');

  const _handleLogIn = () => {
    setSıgnedIn(true);
  };

  const _goProfile = () => {
    setSıgnedIn(true);
  }

  return(
    <NavigationContainer>
      <Appbar.Header title = "HOTEL ADVISOR" style = {styles.header}>
        <Appbar.Action icon= "chat" onPress={_handleChat} />
        <Appbar.Content title="            HOTEL ADVISOR"/>
        <Appbar.Action icon= {signedIn? "login" : "login"} onPress={ signedIn ? _handleLogIn : _goProfile} />
    </Appbar.Header>
      <Tab.Navigator
        screenOptions={({route}) => ({
          
          tabBarIcon:({focused, size, color})=>{
            let iconName;
            if(route.name === 'Search'){
              iconName = 'search';
              size = focused ? 20:17
              color = focused ? 'white' : '#000000'
            }
            else if(route.name === 'Favourites'){
              iconName = 'hand-holding-heart';
              size = focused ? 20:17
              color = focused ? 'white' : '#000000'
            }
            else if(route.name === 'Bookings'){
              iconName = 'home';
              size = focused ? 20:17
              color = focused ? 'white' : '#000000'
            }
            else if(route.name === 'Profile'){
              iconName = 'running';
              size = focused ? 20:17
              color = focused ? 'white' : '#000000'
            }
            return(
              <FontAwesome5
                name = {iconName}
                size = {size}
                color = {color}
              />
            )
          }
        })}
      >
        <Tab.Screen 
          name = "Search"
          component={SearchPage}
        />
        <Tab.Screen 
          name = "Favourites"
          component={SavedPage}
        />
        <Tab.Screen 
          name = "Bookings"
          component={MyBookingsPage}
        />
        <Tab.Screen 
          name = "Profile"
          component={ProfilePage}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  header: {
    backgroundColor: 'deepskyblue',
    alignItems: 'center', 
  }
});

export default App;
