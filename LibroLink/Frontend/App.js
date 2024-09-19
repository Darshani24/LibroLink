
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'

import SignUp from './screens/SingUp';
import HomePage from './screens/splash';
import LoginPage from './screens/Login';
import SearchBook from './screens/SearchBook';
import BookDetails from './screens/BookDetails';
import Category from './screens/Category';


const Stack= createNativeStackNavigator()

export default function App() {
 return (
     <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen name="Welcome" component={HomePage}/>
          <Stack.Screen name="SignUp" component={SignUp}/>
          <Stack.Screen name="Login" component={LoginPage}/>
          <Stack.Screen name="BookS" component={SearchBook}/>
          <Stack.Screen name="BookD" component={BookDetails}/>
         
         

        </Stack.Navigator>
     </NavigationContainer>

    // <NavigationContainer>
    //   <Category/>
    // </NavigationContainer>
  
    );

}

