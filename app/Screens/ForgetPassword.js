import React, { useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert,
    SafeAreaView
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';
export  const Forget = () => {


    let navigation = useNavigation();
   
    const [phone,setPhone] = useState('9876543210');

    


        console.log("Forget Password Screen");
        return (
            <SafeAreaView style={styles.container}>
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
                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={()=>alert("Functionality Will be Available Soon")}>
                    <Text style={styles.loginText}>Get OTP</Text>
                </TouchableHighlight>
                <TouchableHighlight style={[styles.forgetButton]} onPress={()=>navigation.navigate('Login')}>
                    <Text style={styles.forgetText}>Click here to Login</Text>
                </TouchableHighlight>

            </SafeAreaView>
        );
    }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DCDCDC',
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
        alignItems: 'center'
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
        backgroundColor: "#DCDCDC",
    },
    loginText: {
        color: 'white',
        fontWeight:'700'
    },
    forgetText: {
        color: 'blue',
        fontWeight:'700'
    }
});


export default Forget;



