import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,StatusBar} from 'react-native';
import Logo from '../components/Logo';
import Form from '../components/Form';

export default class Login extends Component<{}>{
    render(){
        return(
            <View>
                <Logo/> 
                <Form type="Login"/> 
                <View style={styles.signupText}>
                    <Text>Don't have an account?</Text>
                    <Text style={styles.signupButton}>Signup</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    signupText:{flex:1,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:120
    },
    signupButton:{
        color:'blue',
        fontSize:18,
        fontWeight:'500'
    }
})