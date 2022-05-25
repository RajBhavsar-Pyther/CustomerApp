import React, { Component, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert
} from 'react-native';
import Menu from './AppMenu';

const Register = ({navigation,route}) => {
    
    const [name, onChangeName] = React.useState('');
    const [email, onChangeEmail] = React.useState('');
    const [address, onChangeAddress] = React.useState('');
    const [phone, onChangePhone] = React.useState('');
    const [id, setId] = React.useState('');

    let loadCustomer = async (id) =>{
        let customer = await getCustomerById(id);
            console.log("customer",customer);
            onChangeName(customer.name);
            onChangeEmail(customer.email);
            onChangeAddress(customer.address);
            onChangePhone(customer.phone);
            setId(customer.id);
    }
    useEffect(()=>{
        console.log(route.params);
        if( route.params != undefined){
            loadCustomer(route.params.customerId);/*
            await getCustomerById(route.params.id);
            console.log("customer",customer);
            onChangeName(customer.name);
            onChangeEmail(customer.email);
            onChangeAddress(customer.address);
            onChangePhone(customer.phone);
            setId(customer.id);*/
        }
    },[]);
    var addToCustomer = async () => {
        var customer={
            name,email,phone,address
        };
        if(id == ""){
            customer.id= Date.now()+"S";
            await addCustomer(customer);
        }else{
            customer.id= id;
            await updateCustomer(customer); 
        }
        console.log(customer);
        navigation.navigate('Customer', {});
    }

        return (
            <View style={styles.container}>
                <Menu navigation={navigation} />
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Name"
                        underlineColorAndroid='transparent'
                        value={name}
                        onChangeText={onChangeName} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Email"
                        underlineColorAndroid='transparent'
                        value={email}
                        onChangeText={onChangeEmail} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Phone"
                        underlineColorAndroid='transparent'
                        value={phone}
                        onChangeText={onChangePhone} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Address"
                        underlineColorAndroid='transparent'
                        value={address}
                        onChangeText={onChangeAddress} />
                </View>

                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => addToCustomer()}>
                    <Text style={styles.loginText}>Submit</Text>
                </TouchableHighlight>
            </View>
        );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    loginText: {
        color: 'white',
    }
});

export default Register;