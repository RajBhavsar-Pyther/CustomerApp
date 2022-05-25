import React, { Component, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
  FlatList,StatusBar,
} from 'react-native';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import GradientHeader from 'react-native-gradient-header';
import HeaderContent from '../../custom_modules/react-native-gradient-header/lib/src/components/HeaderContent/HeaderContent';
import LinearGradient from 'react-native-linear-gradient';
import { PopUp } from './PopupScreen';
export  const Home =() =>  {
  const navigation = useNavigation();
  const [data,setData] = useState([
      {id:1, title: "Room", image:"https://img.icons8.com/color/96/000000/cottage.png"},
      {id:2, title: "Food", image:"https://img.icons8.com/color/96/000000/refreshments.png"},
      {id:3, title: "Financial", image:"https://img.icons8.com/color/96/000000/budget.png"} ,
      {id:4, title: "Job", image:"https://img.icons8.com/color/96/000000/find-matching-job.png"} ,
      {id:5, title: "Part Time", image:"https://img.icons8.com/color/96/000000/new-job.png"} ,
      {id:6, title: "Healthcare", image:"https://img.icons8.com/color/96/000000/heart-health.png"} ,
     
    ])
  
    const StatusBarHeight = StatusBar.currentHeight
  
  const clickEventListener=(item) => {
    console.log("item",item.title)
    if(item.id == 1){
        navigation.navigate('PropertyList')
    }else{
      Alert.alert("Coming Soon")
    }
  }
  
  
  return (
  
    <SafeAreaView style={styles.container}>
    <GradientHeader
    gradientColors={["#1d55a6", "#DA6262"]}
    headerContentComponent={(<HeaderContent
      title="Home"
      subtitle="Welcome to BLIV"
      imageSource={require("../icons/BLIV_LOGO_white.png")}/>)}
    />
    <View style={styles.innerContainer}>
      <FlatList style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={data}
        horizontal={false}
        numColumns={2}
        keyExtractor= {(item) => {
          return item.id;
        }}
        renderItem={({item}) => {
          return (
            <TouchableOpacity style={styles.card} onPress={() => {clickEventListener(item)}}>
              <View style={styles.cardFooter}></View>
              <Image style={styles.cardImage} source={{uri:item.image}}/>
              <View style={styles.cardHeader}>
                <View style={{alignItems:"center", justifyContent:"center"}}>
                  <Text style={styles.title}>{item.title}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )
        }}/>
    </View>
    </SafeAreaView>
  );
  }
  
  
  const styles = StyleSheet.create({
  container:{
  flex:1,
  marginTop:0,
  backgroundColor:'#ffff',
  
  },
  innerContainer:{
  marginTop:120,
  },
  list: {
  marginTop:30,
  paddingHorizontal:5,
  backgroundColor:'#ffff',
  // backgroundColor:'#ebf0f7',
  },
  listContainer:{
  alignItems:'center',
  justifyContent:'center',
  paddingTop:20,
  paddingBottom:20,
  backgroundColor:'#ffff',
  
  },
  /******** card **************/
  card:{
  shadowColor: '#000',
  
  shadowOffset: {
    width: 0,
    height: 6,
  },
  shadowOpacity: 0.37,
  shadowRadius: 7.49,
  
  elevation: 12,
  marginVertical: 10,
  backgroundColor:"white",
  flexBasis: '42%',
  marginHorizontal: 10,
  borderRadius:10,
  },
  cardHeader: {
  paddingVertical: 17,
  paddingHorizontal: 16,
  borderTopLeftRadius: 1,
  borderTopRightRadius: 1,
  flexDirection: 'row',
  alignItems:"center", 
  justifyContent:"center"
  },
  cardContent: {
  paddingVertical: 12.5,
  paddingHorizontal: 16,
  },
  cardFooter:{
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingTop: 12.5,
  paddingBottom: 25,
  paddingHorizontal: 16,
  borderBottomLeftRadius: 1,
  borderBottomRightRadius: 1,
  },
  cardImage:{
  height: 70,
  width: 70,
  alignSelf:'center'
  },
  title:{
  fontSize:18,
  flex:1,
  alignSelf:'center',
  color:"#000"
  },
  Container : {
  flex : 1,
  backgroundColor : '#2980b9',
  justifyContent : 'center',
  alignItems : 'center',
  flexDirection : 'row'
  }
  });