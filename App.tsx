/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Index from './Src/Component/Index';
import Todo from './Src/Component/Todo';
function App(): JSX.Element {
  
  return (
    <SafeAreaView style={{flex: 1}}>
      
      <Index />
      
    </SafeAreaView>
  );
}


export default App;
