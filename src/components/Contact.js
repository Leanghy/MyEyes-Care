//import liraries
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';


// create a component
export default class Contact extends Component {
    state={name:'0000'}

handleButton=()=>{
    console.log(this.state.name)
    this.setState({
     name: this.state.name
    })
    //this.state.name=text
}

handleChangeText=(text)=>{
    // this.setState({
    //  Name: text
    // })
    this.state.name=text
}
    render() {
        return (
            <View style={styles.container}>
                <Text >Hello World</Text>

                <TextInput autoCapitalize={'words'} 
                placeholder={'words'} 
                style={styles.textStyle} 
                placeholderTextColor={color='red'}
                onChangeText={
                    (text)=> this.handleChangeText(text)
                 }
                 />
            
                <TouchableOpacity onPress={()=>this.handleButton()} style={styles.buttonStyle}>
                    <Text >Click Me</Text>
                </TouchableOpacity>

                <Text style={fontSize=22}>
                    Name:{this.state.name}
                </Text>

            </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        marginTop: 50,
        alignItems:'center',
    },
    textStyle:{
        width:250,
        fontSize:20,
        backgroundColor:'#1c313a',
        borderRadius:10,
        marginVertical:8,
        paddingVertical:8,
        color:'#ffffff'
    },
    buttonStyle:{
        backgroundColor:'lightblue',
        height:40,
        width:150,
        fontSize:22,
        fontWeight:'bold',
        color:'#ffffff',
        justifyContent:'center',
        alignItems:'center',

    }
})