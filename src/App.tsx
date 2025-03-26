import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Welcome from './pages/Welcome';
import MemberSign from './pages/MemberSign';
import MemberResult from './pages/MemberResult';
const Stack = createNativeStackNavigator();
function App() {
  return (
    //Stack.Navigator da ise global olarak görünmemesi için
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="WelcomeScreen"
          component={Welcome}
          // options={{headerShown: false}} //yukarıda WELCOMEScreen başlığının görünmemesi için
        />
        <Stack.Screen name="MemberSignScreen" component={MemberSign} />
        <Stack.Screen name="MemberResultScreen" component={MemberResult} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
