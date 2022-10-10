import React from 'react';
// Navigation
import { createStackNavigator } from '@react-navigation/stack';
// Screens
import {
  LoginScreen,
  RegisterScreen,
} from '../screens';

const AuthStack = createStackNavigator();
export const AuthStackScreens = () => (
  <AuthStack.Navigator screenOptions={{ headerShown: false }}>
    <AuthStack.Screen name="Login" component={LoginScreen} />
    <AuthStack.Screen name="Register" component={RegisterScreen} />
  </AuthStack.Navigator>
)