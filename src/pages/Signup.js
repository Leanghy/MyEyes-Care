import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar, Image, 
    ImageBackground,TextInput ,CheckBox,TouchableOpacity} from 'react-native';
import Logo from '../components/Logo';
import Form from '../components/Form';

export default class Signup extends Component{
    render() {
        return (
            <View>
                  
                <ImageBackground
                    source={require('../../app/img/backgroundRegister.png')}
                    style={{ width: '100%', height: '100%' ,justifyContent: 'center'}}>
                    <View style={styles.container}> 
                    <TextInput style={styles.inputBox} placeholder='Username' 
                        placeholderTextColor='#0d0d0d' />
                        <TextInput style={styles.inputBox} placeholder='Email' 
                        placeholderTextColor='#0d0d0d' />
                        <TextInput style={styles.inputBox} placeholderTextColor='#0d0d0d' 
                        secureTextEntry={true} placeholder='Password' />
                        <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 10 }}>
                            <CheckBox />
                            <Text style={{ marginTop: 5 }}> Remembeer Me</Text>
                        </View>

                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignSelf: 'flex-end', marginBottom: 100
                        }}>
                            <TouchableOpacity style={styles.button}>
                                <Text>Signup</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.signinText}>
                        <Text>Have account already!</Text>
                        <Text style={styles.signinButton}>Sign In</Text>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: 330,
        height: 260,
        marginTop:280,
        marginLeft:40,
        justifyContent: 'center'
    },
    inputBox: {
        backgroundColor: '#f0f0f5',
        alignSelf: 'center',
        width: 330,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        margin:5
    },
    button: {
        width: 100,
        fontSize: 16,
        backgroundColor: '#b3f0ff',
        borderRadius: 5,
        marginVertical: 8,
        paddingVertical: 8,
        alignSelf: 'flex-end',
        alignItems: 'center',
        margin:5
    },
    labelText: {
        fontSize: 26,
    },
    buttonText: {
        margin: 2

    }, signinText:{flex:1,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:120
    },
    signinButton:{
        color:'blue',
        fontSize:18,
        fontWeight:'500'
    }

})