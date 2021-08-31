
import  React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ShowScreen from './screens/ShowScreen';
import SplashScreen from './screens/SplashScreen';
import Club  from './screens/Club';
import Meet  from './screens/Meet';
import Hackathon  from './screens/Hackathon';

import AboutDev from './screens/AboutDev';
import Onboarding from './screens/OnBoardScreen';
import Tabs from "./navigation/tabs";
import Auth from "./navigation/Auth/index";

const Stack = createNativeStackNavigator();

const App=() => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      {/* <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}} /> */}
       <Stack.Screen name="Onbard" component={Onboarding} options={{headerShown: false}} />
        <Stack.Screen name="Tabs" component={Tabs} options={{headerShown: false}} />
        <Stack.Screen name="Auth" component={Auth} options={{headerShown: false}}/>  
        <Stack.Screen name="AboutDev" component={AboutDev} options={{headerShown: false}}/>  
        <Stack.Screen name="Club" component={Club} />  
        <Stack.Screen name="Meet" component={Meet} />  
        <Stack.Screen name="Hackathon" component={Hackathon} />  

        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>  
        <Stack.Screen name="ShowScreen" component={ShowScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;