import React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Screens/Home';
import Mission from './Screens/Mission';
import { Image } from 'react-native';

const Stack = createStackNavigator();

export default class App extends React.Component{
  render() {
   return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}
        options = {{
          headerTransparent: true,
          headerLeft: () => (
            <Image source = {require('./assets/drawericon.png')} style={{}}/>
          ),
          title: '',
          headerRight: () => (
            <Image sourse = {require('./assets/user.png')} style={{marginHorizontal:10, marginTop:20}}/>
          )         
        }}
        />        
        <Stack.Screen name="Mission" component={Mission}
        options = {{
          headerTransparent: true,
          headerLeft: () => (
            <Image sourse={require('./assets/blackmenu.png')} style={{marginHorizontal:10, marginTop:20}}/>
          ),
          title: '',
          headerRight: () => (
            <Image sourse={require('./assets/user.png')} style={{marginHorizontal: 35, marginTop:45}}/>
          )
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
 }
}
