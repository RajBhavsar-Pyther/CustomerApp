import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View,Image } from "react-native";
import { useNavigation } from "@react-navigation/core";
import Flex from "./FlexEx";


export const PopUp = (props) => {
    const navigation = useNavigation();

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
      isSuccess &&
      <View style={styles.centeredView}>
          
        <View style={styles.modalView}>
        <Image style = {{width: 50, height: 50}} resizeMode = {'contain'} source={require("../icons/icons8-check-circle.gif")}/>
          <Text style={styles.modalText}>Thanks for inquiry! {'\n'} Our Team will contact you shortly</Text>
          <Pressable
            style={[styles.buttonText]}
            onPress={() => {props.setModalVisible(!props.modalVisible);navigation.goBack()}}
          >
            <Text style={styles.textStyle}>Hide Modal</Text>
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
      marginHorizontal:20,
      alignSelf:'center', 
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
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
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
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
        fontSize: 18,
        paddingLeft:50,
        paddingRight:50,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
      },
  });