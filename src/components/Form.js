import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,TouchableOpacity,CheckBox} from 'react-native';



export default class Logo extends Component<{}>{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.labelText}>Username</Text>
                <TextInput style={styles.inputBox} placeholder='Username' placeholderTextColor='#0d0d0d'/>
                <Text style={styles.labelText}>Password</Text>
                <TextInput style={styles.inputBox} placeholderTextColor='#0d0d0d' secureTextEntry={true} placeholder='Password'/>

                <View style={{ flexDirection: 'row' ,marginTop:10,marginLeft:10}}>
                    <CheckBox/>
                    <Text style={{marginTop: 5}}> Remembeer Me</Text>
                </View>
                
                <View style={{flex: 1, flexDirection: 'row',alignSelf: 'flex-end',marginRight:20}}>   
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>{this.props.type}</Text>
                    </TouchableOpacity>
                </View>
                    
                
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
      //flex:1,
      width: 340,
      height: 260,
      backgroundColor:'#ffffff'
    },
    inputBox:{
        backgroundColor:'#f0f0f5',
        alignSelf:'center',
        width:300,
        alignItems:'center',
        justifyContent:'center',
        // backgroundColor:'rgba(255,255,255,0.3)',
        borderRadius:5
    //  marginVertical:8,
    //  paddingVertical:8,
    },
    button:{
        width:100,
        fontSize:16,
        backgroundColor:'#b3f0ff',
        borderRadius:5,
        marginVertical:8,
        paddingVertical:8,
        alignSelf: 'flex-end',
        alignItems:'center'
    
        // justifyContent:'center'
    },
    labelText:{
        fontSize:26,
        // marginVertical:8,
        marginTop:20,
        marginLeft:20
       
    },
    buttonText:{
        margin:2

    }

  });