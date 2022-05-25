import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View,Image } from "react-native";
import { useNavigation } from "@react-navigation/core";
import Flex from "./FlexEx";
import LinearGradient from "react-native-linear-gradient";


export const PopUp = (props) => {
    const navigation = useNavigation();
    console.log("issucess",props.isSuccess)

// const [modalVisible, setModalVisible] = useState();
return (
  <View >
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        props.setModalVisible(!props.modalVisible);
      }}
    >
    {
      
     
      
      
      (props.isSuccess) &&
      <View style={styles.centeredView}>
          
        <View style={styles.modalView}>
        <Image style = {{width: 50, height: 50}} resizeMode = {'contain'} source={require("../icons/done.png")}/>
          <Text style={styles.modalText}>Thanks for inquiry! {'\n'} Our Team will contact you shortly</Text>
          <Pressable
            style={[styles.buttonText]}
            onPress={() => {props.setModalVisible(!props.modalVisible);navigation.goBack()}}
          >
             <LinearGradient start={{x: 0.0, y: 0}} end={{x: 1.3, y: 1 }}
            colors={['#1d55a6','#DA6262']}
            style={styles.linearGradient}>
                    <Text style={styles.buttonText}>OK</Text></LinearGradient>
            {/* <Text style={styles.textStyle}>OK</Text> */}
          </Pressable>
        </View>
      </View>
      
      }

      {
        (!props.isSuccess) && 
        <View style={styles.centeredView}>
          
        <View style={styles.modalView}>
        <Image style = {{width: 50, height: 50}} resizeMode = {'contain'} source={require("../icons/cancel.png")}/>
          <Text style={styles.modalText}>Unable to Process Request; {'\n'} Please Try Again After Sometime</Text>
          <Pressable
            style={[styles.buttonText]}
            onPress={() => {props.setModalVisible(!props.modalVisible);navigation.goBack()}}
          >
             <LinearGradient start={{x: 0.0, y: 0}} end={{x: 1.5, y: 0.5 }}
            colors={['#DA6262', '#1d55a6']}
            style={styles.linearGradient}>
                    <Text style={styles.buttonText}>OK</Text></LinearGradient>
            {/* <Text style={styles.textStyle}>OK</Text> */}
          </Pressable>
        </View>
      </View>



      }
    </Modal>
      </View>
    

)};

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      // marginTop: 22
    },
    modalView: {
      marginHorizontal:10,
      alignSelf:'center', 
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      justifyContent:'space-around',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      width:50,
      height:50,
      elevation:0
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    buttonText: {
      fontSize: 14,
      fontFamily: 'Gill Sans',
      textAlign: 'center',
      margin: 10,
      color: '#ffffff',
      backgroundColor: 'transparent',
    },
    linearGradient: {
      
      paddingLeft: 20,
      paddingRight: 20,
      borderRadius: 30
    }
  });