import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, CheckBox } from 'react-native';

const axios = require('axios');
import { Navigation } from 'react-native-navigation';

export default class Logo extends Component{

    state = {
        username: '',
        password: ''
    }

    login =  () => {
         axios.get('http://pos-api.channat.com/api/v1/company/' + this.state.username )
         // , {
        //     username: this.state.Username,
        //     password: this.state.Password
        // })
        .then(result => {
            // cusscess 
            // write data 
            // o
            if (result.data.phone == '01111111') {
                
                Navigation.setRoot({
                    root: {
                        stack: {
                            children: [{
                                component: {
                                    name: 'HomeMenu'
                                }
                            }]
                        }  
                    }
                    
                })
            } else {
                alert("Wrong username or password")
            }

            
            console.log("=> ", result)
        })
        .catch(error => {
            console.log("==> error: ", error)
        })
    }

    
    render() {
        return (
            <View style={styles.container}>
                {/* <Text style={styles.labelText}>Username</Text> */}
                <TextInput onChangeText={(username) => this.setState({username})} style={styles.inputBox} placeholder='Username' placeholderTextColor='#0d0d0d' />
                {/* <Text style={styles.labelText}>Password</Text> */}
                <TextInput onChangeText={(password) => this.setState({password})} style={styles.inputBox} placeholderTextColor='#0d0d0d' secureTextEntry={true} placeholder='Password' />

                <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 10 }}>
                    <CheckBox />
                    <Text style={{ marginTop: 5 }}> Remembeer Me</Text>
                </View>

                <View style={{ flex: 1, 
                                flexDirection: 'row', 
                                alignSelf: 'flex-end',marginBottom:110
                               }}>
                    <TouchableOpacity onPress={this.login} style={styles.button}>
                        <Text style={styles.buttonText}>{this.props.type}</Text>
                    </TouchableOpacity>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: 350,
        height: 260
    },
    inputBox: {
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        width: 350,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor:'rgba(255,255,255,0.3)',
        borderRadius: 5,
        marginVertical:5,
        paddingVertical:5,
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
        marginTop:5
    },
    labelText: {
        fontSize: 26
    },
    buttonText: {
        margin: 2

    }

});