import { useNavigation } from '@react-navigation/core';
import React, { Component ,useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Alert,
  ScrollView,
  SafeAreaView,
  TextInput
} from 'react-native';
import GradientHeader from 'react-native-gradient-header';
import HeaderContent from '../custom_component/HeaderContent/HeaderContent';
import { PopUp } from './PopupScreen';
export  const PropertyList =() => {

    let navigation = useNavigation();
    const [isVisible,setIsVisible] = useState(false);
    const [userSelected,setuserSelected] = useState([])
    const [data,setData] = useState ( [
    {id:1,  name: "Property1",   image:"https://img.icons8.com/color/100/000000/real-estate.png",  count:124.711},
    {id:2,  name: "Property2",    image:"https://img.icons8.com/color/100/000000/real-estate.png", count:234.722},
    {id:3,  name: "Property3",    image:"https://img.icons8.com/color/100/000000/real-estate.png", count:324.723} ,
    {id:4,  name: "Property4",   image:"https://img.icons8.com/color/100/000000/real-estate.png",  count:154.573} ,
    {id:5,  name: "Property5",   image:"https://img.icons8.com/color/100/000000/real-estate.png",  count:124.678} ,
    ] )
    
  const onClickProperty = (item) =>{
      navigation.navigate('Login')
  }

  const clickEventListener = () => {
    setIsVisible(!isVisible);
  }


    return (
      <SafeAreaView style={styles.container}>
        <PopUp modalVisible = {isVisible} isSuccess = {isVisible} setModalVisible = {setIsVisible}/>
        <GradientHeader
        gradientColors={["#1d55a6", "#DA6262"]}
        headerContentComponent={(<HeaderContent
          title="Available Properties"
          subtitle="Welcome to BLIV"
          imageSource={require("../icons/back-button_white.png")}
          imageOnPress = {() => navigation.goBack()}
          
          />)}
        />
        

          <View style={styles.formContent}>
          <View style={styles.inputContainer}>
            <Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://png.icons8.com/search/androidL/100/000000'}}/>
            <TextInput style={styles.inputs}
                placeholder="Search"
                underlineColorAndroid='transparent'
                onChangeText={(name_address) => this.setState({name_address})}/>
          </View>
        </View>
        <FlatList 
          style={styles.contentList}
          columnWrapperStyle={styles.listContainer}
          data={data}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
          return (
            <TouchableOpacity style={styles.card} onPress={() => {onClickProperty(item)}}>
              {/* <Image style={styles.image} source={{uri: item.image}}/> */}
              <TouchableOpacity style={styles.inquireButton} onPress={()=> clickEventListener()}>
                  <Text style={styles.inquireButtonText}>INQUIRE</Text>  
                </TouchableOpacity>
              <View style={styles.cardContent}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.count}>{item.count}</Text>
                <Text style={styles.count}>{item.count}</Text>
                <Text style={styles.count}>{item.count}</Text>
                <Text style={styles.count}>{item.count}</Text>
              </View>
            </TouchableOpacity>
          )}}/>
      </SafeAreaView>
    );
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:0,
    backgroundColor:"#ffff"
  },
  contentList:{
    flex:1,
  },
  formContent:{
    flexDirection: 'row',
    justifyContent:'flex-end',
    alignItems:'flex-start',
    marginTop:135,
    borderRadius:10
    // borderWidth:2
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      height:45,
      flexDirection: 'row',
      alignItems:'center',
      flex:1,
      marginVertical:10,
      marginHorizontal:15,
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,
      elevation: 12,
      // borderWidth:2,
  },
  icon:{
    width:30,
    height:30,
  },
  iconBtnSearch:{
    alignSelf:'center'
  },
  inputs:{
      height:45,
      marginLeft:0,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    marginLeft:0,
    justifyContent: 'center'
  },
  cardContent: {
    marginHorizontal:0,
    marginVertical:10,
    flexDirection:'column',
    justifyContent:'space-evenly',
    alignItems:'center',

  },
  image:{
    width:90,
    height:90,
    borderRadius:45,
    borderWidth:2,
    borderColor:"#000"
  },

  card:{
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginLeft: 20,
    marginRight: 20,
    marginTop:5,
    marginBottom:10,
    backgroundColor:"white",
    padding: 10,
    flexDirection:'row-reverse',
    justifyContent:'space-between',
    alignItems:'center',
    borderRadius:10,
    height:'auto'
  },

  name:{
    fontSize:18,
    // flex:1,
    // alignSelf:'center',
    color:"#000",
    fontWeight:'bold'
  },
  count:{
    fontSize:14,
    // flex:1,
    // alignSelf:'center',
    color:"#696969"
  },
  inquireButton: {
    marginTop:0,
    height:35,
    width:80,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10,
    // borderWidth:1,
    // borderColor:"#dcdcdc",
    backgroundColor:'#03173C',
  },
  inquireButtonText:{
    color: "#ffff",
    fontSize:12,
  },
}); 