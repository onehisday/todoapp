import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Todo from './Todo';
import Index from './Index';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Index' component={Index} ></Stack.Screen>
                <Stack.Screen name='Todo' component={Todo} ></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default Navigation
const styles = StyleSheet.create({
    icon1: {
        width: "155%",
        height: "80%",
    },
    icon: {
        width: "130%",
        height: "80%",
    }
})