import React,{useState,useEffect} from 'react';
import { StyleSheet, TextInput, View, SafeAreaView, Text, Alert, TouchableHighlight, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/core';

const Menu = (props) => {
    let navigation = useNavigation();
    return(
        <View style={{flexDirection:"row"}}>
            <Button onPress={() => navigation.navigate('Home')} title="Home"></Button>
            <Button onPress={() => navigation.navigate('AddCustomer')} title="Add"></Button>
            <Button onPress={() => navigation.navigate('Student')} title="Student"></Button>
            <Button onPress={() => navigation.navigate('Customer')} title="Customer"></Button>
            <Button onPress={() => navigation.navigate('Login')} title="Logout"></Button>
        </View>
    );
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  opacity: {
    alignItems: "center",
    backgroundColor: "#737373",
    padding: 10
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default Menu;
