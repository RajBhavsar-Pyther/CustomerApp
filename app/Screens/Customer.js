import React,{useEffect,useState,useCallback} from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import SmsRetriever from 'react-native-sms-retriever';
import { getApiLevel, getPhoneNumber } from 'react-native-device-info';
import {check,request,requestMultiple, PERMISSIONS, RESULTS} from 'react-native-permissions';
import { useFocusEffect } from '@react-navigation/core';
import { TextInput, HelperText } from 'react-native-paper';
import RNOtpVerify from 'react-native-otp-verify';
import OTPInputView from '@twotalltotems/react-native-otp-input'


const Separator = () => (
  <View style={styles.separator} />
);

const Customer = () => {
  const [phoneNumber,setPhoneNumber] = useState()
  // useFocusEffect(
  //   useCallback(() => {
  //     console.log("useFocusEffect called");
  //     let isActive = true;
  
  //     const fetchPhoneNumber = async () => {
  //       try {
  //         const phoneNumber = await _onPhoneNumberPressed()
  //         console.log("phoneNumber in useFocusEffect",phoneNumber);
  
  //         if (isActive) {
  //           setPhoneNumber(phoneNumber);
  //         }
  //       } catch (e) {
  //         // Handle error
  //       }
  //     };
  //     setTimeout(() => {
  //       fetchPhoneNumber();
  //     }, 2000);
      
  
  //     return () => {
  //       isActive = false;
  //     };
  //   }, [])
  // );

  useEffect(()=>{
    RNOtpVerify.getHash()
    .then(console.log)
    .catch(console.log);

    RNOtpVerify.getOtp()
    .then(p => {
      console.log("Listner Started>>>>",p);
      RNOtpVerify.addListener(otpHandler)})
    .catch(p => console.log(p));

    return () =>  RNOtpVerify.removeListener();
  },[])
  const otpHandler = (message) => {
    console.log("message",message);
    const otp = /(\d{4})/g.exec(message)[1];
    setPhoneNumber(otp)
    console.log("otp",otp);
    RNOtpVerify.removeListener();
    console.log("Listner Stopped>>>>")
}
  // Get the phone number (first gif)
  const _onPhoneNumberPressed = async () => {
    try {
      const phoneNumber = await SmsRetriever.requestPhoneNumber();
      if(phoneNumber.length>0) {
      let modifiedNumber = phoneNumber.split("+91")[1]
      setPhoneNumber(modifiedNumber)      
    } 
      return phoneNumber
    } catch (error) {
      console.log(error);
    }
   };
  
  // Get the SMS message (second gif)
  const _onSmsListenerPressed = async () => {
    try {
      const registered = await SmsRetriever.startSmsRetriever();
      if (registered) {
        SmsRetriever.addSmsListener(event => {
          console.log(event.message);
          SmsRetriever.removeSmsListener();
        }); 
      }
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };
  const requestPhoneNumberPermission = () =>{
    console.log("here");
    requestMultiple([PERMISSIONS.ANDROID.READ_PHONE_NUMBERS,PERMISSIONS.ANDROID.READ_SMS]).then((statuses) => {
      console.log('READ_PHONE_NUMBERS', statuses[PERMISSIONS.ANDROID.READ_PHONE_NUMBERS]);
      console.log('READ_SMS', statuses[PERMISSIONS.ANDROID.READ_SMS])
      // …
    });
  
  }
  const getMobileNumbersFromSim = () =>{
    getPhoneNumber().then((phoneNumber) => {
      console.log("PhoneNumber are",phoneNumber);
      // Android: null return: no permission, empty string: unprogrammed or empty SIM1, e.g. "+15555215558": normal return value
    });
  }
  const getMobileNumbers =  () => {
     getApiLevel().then((apilevel)=>{
      console.log("api",apilevel);
      if(apilevel > 29){
        check(PERMISSIONS.ANDROID.READ_PHONE_NUMBERS)
          .then((result) => {
            console.log("result",result);
            switch (result) {
              case RESULTS.UNAVAILABLE:
                console.log('This feature is not available (on this device / in this context)');
                break;
              case RESULTS.DENIED:
                requestPhoneNumberPermission()
                console.log('The permission has not been requested / is denied but requestable');
                break;
              case RESULTS.LIMITED:
                console.log('The permission is limited: some actions are possible');
                break;
              case RESULTS.GRANTED:
                getMobileNumbersFromSim()
                console.log('The permission is granted');
                break;
              case RESULTS.BLOCKED:
                console.log('The permission is denied and not requestable anymore');
                break;
            }
          })
          .catch((error) => {
            // …
          });
      
      }else{
  
      }
    })
  }
  return(
  <SafeAreaView style={styles.container}>

    <View>
      <Text style={styles.title}>
        The title and onPress handler are required. It is recommended to set accessibilityLabel to help make your app usable by everyone.
      </Text>
      <Button
        title="Press me"
        onPress={_onPhoneNumberPressed}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        Adjust the color in a way that looks standard on each platform. On  iOS, the color prop controls the color of the text. On Android, the color adjusts the background color of the button.
      </Text>
      <Button
        title="Press me"
        color="#f194ff"
        onPress={getMobileNumbers}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        All interaction for the component are disabled.
      </Text>
      <Button
        title="Press me"
        disabled
        onPress={() => Alert.alert('Cannot press this one')}
      />
    </View>
    <OTPInputView
    style={{width: '80%', height: 200}}
    pinCount={4}
    // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
    // onCodeChanged = {code => { this.setState({code})}}
    autoFocusOnLoad
    codeInputFieldStyle={styles.borderStyleBase}
    codeInputHighlightStyle={styles.borderStyleHighLighted}
    onCodeFilled = {(code) => {
        console.log(`Code is ${code}, you are good to go!`)
    }}
/>
    <TextInput
      mode='outlined'
      label="PhoneNumber"
      value={phoneNumber}
      activeOutlineColor={'#435898'}
      onChangeText={text => setPhoneNumber(text)}
    />
    <HelperText padding={"none"} type="error" visible={true}>
      Email address is invalid!
    </HelperText>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
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
  borderStyleBase: {
    color:'green',
    width: 40,
    height: 45
  },

  borderStyleHighLighted: {
    borderColor: "green",
  },

  underlineStyleBase: {
    width: 30,
    color:'green',
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: "green",
  },
});

export default Customer;