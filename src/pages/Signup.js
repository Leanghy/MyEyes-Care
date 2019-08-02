import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,StatusBar} from 'react-native';
import Logo from '../components/Logo';
import Form from '../components/Form';

export default class Signup extends Component<{}>{
    render(){
        return(
            <View>
                <Logo/> 
                <Form type="Log In"/> 
                <View style={styles.signupText}>
                    <Text>Register | Lost you password?</Text>
                    <Text style={{paddingVertical:18}}>Back to Normal</Text>
                    {/* <Text style={styles.signupButton}>Sign In</Text> */}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    signupText:{
        fontSize:22,
        marginTop:20,
        marginLeft:20
    },
    signupButton:{
        color:'#ffffff',
        fontSize:18,
        fontWeight:'500'
    }
})