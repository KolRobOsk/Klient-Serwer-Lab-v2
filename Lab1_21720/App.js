import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './navigation';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Screen} from './SRC/Screen.js';
import {Screen2} from './SRC/Screen2.js';
import {Screen3} from './SRC/Screen3.js';
const Stack = createNativeStackNavigator();
export default function MyStack()  {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Screen"
          component={Screen}
        />
        <Stack.Screen
        name="Screen2"
        component={Screen2}
         />
        <Stack.Screen
        name="Screen3"
        component={Screen3}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
