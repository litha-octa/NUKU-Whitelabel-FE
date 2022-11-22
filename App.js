import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/Router'

export default function App() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}

