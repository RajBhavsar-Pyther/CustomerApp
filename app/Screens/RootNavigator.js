import React, {Component} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, Header } from '@react-navigation/stack';

import { Login } from "./Login";
import Customer from './Customer';
import AddEditCustomer from './AddEditCustomer';
import CustomDatePicker from "./CustomDatePicker";
import Menu from './AppMenu';
import { Forget } from "./ForgetPassword";
import Register from "./Register";
import  {Home}  from "./Home";
import { PopUp } from "./PopupScreen";
// import DrawerEx from "./DrawerEx"
import Flex from "./FlexEx";
import { PropertyList } from "./PropertyList";
import AddUserDetails from "./AddUserDetail/index";
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { LinearGradientButton } from "./LinearGradient";

function AboutScreen() {
    return (
      <View>
         <Menu/>
         <View style={{marginLeft:10}}>
         <Text>About Screen</Text>
         <Text>You have {getCustomers().length} customer registered</Text>
         </View>
        
      </View>
    );
  }
const Stack = createStackNavigator();


export const RootNavigator = () => {
    return (
        <NavigationContainer >
        <Stack.Navigator initialRouteName="Customer" screenOptions={{
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center',
            alignSelf: 'center',
          },headerShown:false}} options={{gestureEnabled: false}} >
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="Student" component={CustomDatePicker} />
        <Stack.Screen name="Home" component={Home} options={{headerTitle:"Welcome to BLIV",headerTitleAlign: 'center',headerShown:false}}/>
        <Stack.Screen name="PropertyList" component={PropertyList} options={{headerTitle:"Available Properties",headerTitleAlign: 'center',}} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Customer" component={Customer} />
        <Stack.Screen name="AddCustomer" component={AddEditCustomer} />
        <Stack.Screen name="EditCustomer" component={AddEditCustomer} />
        <Stack.Screen name="ForgetPassword" component={Forget} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="PopUp" component={PopUp} />
        <Stack.Screen name="AddUserDetail" component={AddUserDetails} />



        </Stack.Navigator>
      </NavigationContainer>

        );

     
};
var styles = StyleSheet.create({
  linearGradient: {
    
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});