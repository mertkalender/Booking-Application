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
  TextInput,
  ImageBackground,
  Pressable,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import DatePicker from 'react-native-date-picker';


export default function SearchPage({}){

  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)


  return(
    <ImageBackground source={require("./assets/background.jpg")}>
      <View style = {styles.body}>
          <View style = {styles.welcome}>
            <Text style ={[
              {fontSize: 23},
              styles.text
              ]}>Welcome To the Best Booking App!</Text>
            <Text style ={[
              {fontSize: 17},
              styles.text
              ]}>
                Search for accomodations all around the world</Text>
          </View>

        <View style = {styles.input}>
          <TextInput 
          style = {styles.inputText}
          placeholder = "Search a city country or hotel"
          />
          <Pressable 
            onPress={() => setOpen(true)}
            android_ripple={{color: '#82d5ac'}}
            style = {styles.dateButton} >
            <Text style = {[
              {fontSize: 15},
              {fontWeight: 'bold'}
            ]}>
            From (date)
            </Text>
          </Pressable>
          <Pressable 
            onPress={() => setOpen(true)}
            android_ripple={{color: '#82d5ac'}}
            style = {styles.dateButton} >
            <Text style = {[
              {fontSize: 15},
              {fontWeight: 'bold'}
            ]}>
            To (date)
            </Text>
          </Pressable>
          <DatePicker
            mode = "date"
            modal
            open={open}
            date={date}
            onConfirm={(date) => {
              setOpen(false)
              setDate(date)
            }}
            onCancel={() => {
              setOpen(false)
            }}
          />
          <TextInput 
            style = {styles.inputText}
            placeholder = "Number of guests"
            keyboardType='number-pad'
          />
          <TextInput 
            style = {styles.inputText}
            placeholder = "Number of rooms"
            keyboardType='number-pad'
          />
          <Pressable 
            android_ripple={{color: '#82d5ac'}}
            style = {[
              {backgroundColor: '#2db06f'},
              styles.searchButton,
              ]} >
            <Text style = {[
              {fontSize: 20},
              {fontWeight: 'bold'}
            ]}>
            SEARCH
            </Text>
          </Pressable>
          <View>
            <Text style={{height:120}}></Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  body: {
    alignItems: 'stretch',
  },
  welcome: {
    backgroundColor: '#ffa50090',
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: 10,
    borderRadius: 10,
  },
  input: {
    marginTop: 50,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  inputText: {
    margin: 10,
    width: 300,
    borderRadius: 10,
    borderWidth: 1,
    fontSize: 15,
    fontWeight: 'bold',
    backgroundColor: '#ff7800',
    textAlign: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: 'black',
    margin: 10
  },
  searchButton: {
    width: 100,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  dateButton: {
    margin: 10,
    width: 300,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff7800',
    borderWidth: 1,
  },
})