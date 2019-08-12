
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,StatusBar,TouchableOpacity,ToastAndroid} from 'react-native';
import Logo from '../components/Logo';
import Form from '../components/Form';

import { Navigation } from 'react-native-navigation';
// Navigation.registerComponent('Signup', () => Signup);

export default class Login extends Component{
signup=()=>{
    Navigation.setRoot({
        root: {
            stack: {
                children: [{
                    component: {
                        name: 'Signup'   
                    }
                }]
            }  
        }
    })
}

    render(){
        return(
            <View>
                <Logo/> 
                <Form type="Login"/> 
                <View style={{alignItems:'center'}}>
                    <Text>Don't have a account?</Text>
                </View>
                <TouchableOpacity
                onPress={() => ToastAndroid.show(ToastAndroid.SHORT)}>
                <View>
                <View style={{
                    flexDirection: 'row',
                    alignSelf: 'center',marginBottom:80}}>  
                        <TouchableOpacity onPress={this.signup}>
                            <Text style={styles.buttonTextDetails}> Signup</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </TouchableOpacity>
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
    },
    buttonTextDetails:{
        color:'blue',
        fontSize:18,
        fontWeight:'500',
        margin:5,
        lineHeight:30,
        width:70,
        alignItems:'center'
    }
})