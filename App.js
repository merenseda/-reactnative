import React from 'react';
//import {  } from './'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, SectionList, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './screens/Navigator';

export default function App() {
  return (
    <NavigationContainer>
        <StatusBar style='auto' />
        <Navigator />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  }
})