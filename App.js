/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import {StatusBar} from 'react-native';
import Home from './components/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SingleShow from './components/SingleShow';
const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="mobieEffects" component={Home} />
        <Stack.Screen name="SingleShow" component={SingleShow} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
