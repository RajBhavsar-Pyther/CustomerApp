import React, { Component,useState,useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert,
    SafeAreaView,
    Platform,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useNavigation} from '@react-navigation/native';
import PulllDownIndicator from './PullDownRefresh';
import LinearGradient from 'react-native-linear-gradient';
import { shadow } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DatePicker from './CustomDatePicker';

const TAG = "LoginScreen";

export const Login = ()=>{
    console.log(TAG);
    let navigation = useNavigation();
   
    const [phone,setPhone] = useState('9876543210');
    const [password,setPassword]=useState('admin');
    const [loading,loadingOn] = useState(false);
    const [date, setDate] = useState();

    const onChange = (event, value) => {
        console.log("event type>>>",event.type);
        console.log("date",value)
        console.log("dateIST",value.toUTCString())
        setDate(value);
        
      };

      const onLoginButton = (values) => {
        try{

            setLoading(true);

            let uri = Global.LOGIN_API
            var loginObj = {
                mobileNumber: values.mobileNumber,
                password: values.password
            }
            console.log(Constants.CONOSLE_REQUEST, TAG + " callLoginAPI Request " , JSON.stringify(loginObj));
            ApiServices.callServicePostWithBodyData(uri,loginObj,handleLogin)
        }catch(err){console.log("REQ ERR",err)}

    };

    const handleLogin = async(response, isError) => {
        console.log(Constants.CONOSLE_SUCCESS ,TAG + " callLoginAPI Response " , JSON.stringify(response));
        console.log(Constants.CONOSLE_ERROR, TAG + " callLoginAPI isError " , isError);
        
        if (!isError) 
        {

            if (response != undefined && response != null) {
                if(response?.message){
                    console.log("if called");
                    popUpEnable(response?.message ? response.message : '',false,false,undefined)
                }
                else{
                    let data = {
                     fullName : response?.result?.data?.user?.lastName ? response.result.data.user.firstName.concat(" ", response.result.data.user.lastName) : response.result.data.user.firstName,
                     token :response?.result?.token,
                     userId : response?.result?.data?.user?._id
                        
                    }
                    logIn(data)
                   
                }
                
            } else {
              popUpEnable(undefined,false,false)
            }
        } else { 
            
            popUpEnable(undefined,false,false)

        }

       setLoading(false);
    }

   const onForgetText = () => navigation.navigate('ForgetPassword');
    

   const onRegister = () => navigation.navigate('Register');
    


       
        return (
            <SafeAreaView style={styles.container}>
               {    
                    loading && <PulllDownIndicator/>
                }
                <View style={{width:'100%',height:'35%',marginBottom:50,marginTop:20}}>
                <Image style={{width: '100%',height:'100%',resizeMode:'contain',margin:0}} source={require("../icons/BLIV_LOGO_transparent.png")}></Image>
                </View>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon}
                        source={{ uri: 'https://training.pyther.com/icons/user.png' }} />
                    <TextInput style={styles.inputs}
                        placeholder="Mobile Number"
                        keyboardType="number-pad"
                        underlineColorAndroid='transparent'
                        value={phone}
                        onChangeText={setPhone} />
                </View>

                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon}
                        source={{ uri: 'https://training.pyther.com/icons/key.png' }} />
                    <TextInput style={styles.inputs}
                        placeholder="Password"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        value={password}
                        onChangeText={setPassword} />
                </View>

                <View><TouchableOpacity onPress={() => onLoginButton()}>
                    <LinearGradient start={{x: 0, y: 0}} end={{x: 1.3, y: 1 }}
            colors={['#1d55a6','#DA6262']}
            style={styles.linearGradient}>
                    <Text style={styles.buttonText}>Login</Text></LinearGradient>
                </TouchableOpacity></View>
                <TouchableHighlight style={[styles.forgetButton]} onPress={() => navigation.navigate('ForgetPassword')}>
                    <Text style={styles.forgetText}>Forget Password</Text>
                </TouchableHighlight>
                <TouchableHighlight style={[styles.forgetButton]} onPress={() => onRegister()}>
                    <Text style={styles.forgetText}>Sign Up/ Register</Text>
                </TouchableHighlight>

                <DatePicker 
                mode={'date'}
                placeholder="Date Of Birth" 
                date={date}
                dateContainerStyle={{borderColor : 'red'}}
                dateTextStyle={{color:'blue'}}
                format="DD-MMM-YYYY"
                display={Platform.OS === 'ios' ? 'spinner' : 'default'} 
                onDateChange={onChange} 
                maxDate={new Date(new Date().setFullYear(new Date().getFullYear() - 18))} //for age >= 18
                
                />

            </SafeAreaView>
        );
    }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffff',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 250,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',

        shadowColor: "#000", 
        shadowOffset: { width: 0, height: 8, }, 
        shadowOpacity: 1, 
        shadowRadius: 10.32, 
        elevation: 16,
        
    },
    linearGradient: {
      
        paddingLeft: 40,
        paddingRight: 40,
        borderRadius: 30
      },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: "#00b5ec",
    },
    forgetButton: {
        marginTop:10,
        backgroundColor: "#DCDCDC",
    },
    loginText: {
        color: 'white',
        fontWeight:'700'
    },
    forgetText: {
        color: 'blue',
        fontWeight:'700'
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
