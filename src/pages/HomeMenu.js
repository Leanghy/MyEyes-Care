//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet ,Image,ImageBackground, TouchableOpacity} from 'react-native';
import { Navigation } from 'react-native-navigation';

// create a component
class HomeMenu extends Component {
    goToScreen = (screenName) => {
        Navigation.push(this.props.componentId, {
            component: {
                name: screenName
            }
        })
    }


    render() {
        return (
            <ImageBackground 
                source={require('../../app/img/home_menu_bg.png')}
                style={{ width: '100%', height: '100%' ,justifyContent: 'center'}}>

                <View style={styles.overlayContainer}>
                    
                    <TouchableOpacity style={styles.top}>
                        <View >
                            <Text style={styles.header}>MyEyes-Care</Text>
                        </View>
                    </TouchableOpacity>
                    
                    <View style={styles.menuContainer}>
                    <TouchableOpacity 
                        onPress={() => this.goToScreen('Patient')}
                        style={styles.image}>
                        <Image 
                            source={require('../../app/img/Appointment1.png')} 
                            style={styles.appointment}/>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                      onPress={() => this.goToScreen('Doctor')}
                    style={styles.image}>
                        <Image 
                            source={require('../../app/img/Doctor1.png')} 
                            style={styles.appointment}/>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                    style={styles.image}>
                    <Image 
                        source={require('../../app/img/Schedule1.png')} 
                        style={styles.appointment}/>
                    </TouchableOpacity>
                        
                    <TouchableOpacity
                    style={styles.image}>
                    <Image 
                        source={require('../../app/img/Prescription1.png')} 
                        style={styles.appointment}/>
                    </TouchableOpacity>
                    
                    </View>
                    
                </View>

            </ImageBackground>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    top:{
        height:'33.33333%',
        alignItems: 'center',
        justifyContent:'center'
    },
    header: {
        color:'#fff',
        fontSize:28,
        borderWidth:2,
        borderColor:'#fff',
        padding:20,
        paddingLeft:40,
        paddingRight:40,
    },
    overlayContainer:{
       flex:1,
       backgroundColor:'rgba(47,163,218,0.4)'
    },
    image:{
        width:'50%',
        height:'83.33%',
        opacity:0.8,
        borderColor:'#000',
        borderWidth:1
    },
    menuContainer:{
        height:'40%',
        flexDirection:'row',
        flexWrap:'wrap'
    },
    appointment:{
        width:'100%',
        height:'100%',
        opacity:0.8,
        borderColor:'#000',
        borderWidth:1
    }
});

//make this component available to the app
export default HomeMenu;
