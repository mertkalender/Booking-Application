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
  Image,
  Pressable,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default function ProfilePage({navigation}){
  
  const [Items, setItems] = useState([
    {key: 1, item: 'Edit My Profile'},
    {key: 2, item: 'My Wallet'},
    {key: 3, item: 'Reviews'},
    {key: 4, item: 'My Vouchers'},
    {key: 5, item: 'Customer Service'},
    {key: 6, item: 'Covid-19 Information'},
    {key: 7, item: 'Settings'},
    {key: 8, item: 'Sign Out'},
  ])


    return(
      <View style = {styles.body}>
        <View style = {styles.header}>
          <Image style= {styles.image} source={require("../assets/pp.jpg")}/>
          <Text style = {[
            {fontSize: 15},
            {fontWeight: 'bold'},
          ]}>Frank Miguel Luziero Roque Salgado</Text>
        </View>
        <View style =  {styles.settings}>
          <ScrollView>
            {
              Items.map((object) => {
                let iconName
                switch (object.key) {
                  case 1:
                    iconName = "user-edit"
                    break;
                  case 2:
                    iconName = "wallet"
                    break;
                  case 3:
                    iconName = "comment-dots"
                    break;
                  case 4:
                    iconName = "ticket-alt"
                    break;
                  case 5:
                    iconName = "phone"
                    break;
                  case 6:
                    iconName = "clinic-medical"
                    break;
                  case 7:
                    iconName = "wrench"
                    break;
                  case 8:
                    iconName = "sign-out-alt"
                    break;
                  default:
                    break;
                }
                return(
                  <View key = {object.key} style = {styles.rows}>
                    <Pressable 
                      android_ripple={{color: '#82d5ac'}}
                      style = {[
                        {backgroundColor: '#2db06f'},
                        styles.button,
                        ]} >
                      <Text style = {styles.listText}><FontAwesome5 
                      name = {iconName}
                      size = {20}
                      /> {object.item}</Text>
                    </Pressable>
                  </View>
                )
              })
            }
          </ScrollView>
        </View>
      </View>  
    )
}

const styles = StyleSheet.create({
  body: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'stretch',
  },
  image: {
      width: 150,
      height: 150,
      borderRadius: 150,
      alignItems: 'center',
      margin: 10
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      alignContent: 'center',
      margin: 10,
  },
  settings: {
      flex: 6,
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      margin: 10,
  },
  rows: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'stretch',
    marginBottom: 10,
},
  listText: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    alignContent: 'center',
  },
  button: {
    marginVertical: 13,
    borderRadius: 15,
  },
})