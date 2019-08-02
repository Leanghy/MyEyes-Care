//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet ,FlatList,ActivityIndicator} from 'react-native';
// import MyApp from './src/MyApp';
// create a component
class MyClass extends Component {

    state ={
        data:[
            {key:'One'},
            {key:'Two'},
            {key:'One'},
            {key:'Two'},
            {key:'One'},
            {key:'Two'},
            {key:'One'},
            {key:'Two'},
            {key:'One'},
            {key:'Two'},
        ],

        students:[
            {key:'Mr'}
        ]
    };

    render() {
        return (
            <View style={[styles.containerStyle, styles.horizontal]}>
                <FlatList 
                    data={this.state.data}
                    renderItem={({item}) => <Text style={styles.textStyle}>{item.key}</Text>}
                />

                <FlatList 
                    data={this.state.students}
                    renderItem={({item}) => <Text>{item.key}</Text>}
                />   

                {/* <ActivityIndicator size="small" color="#00ff00" /> */}

                
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    containerStyle: {
        marginTop:30
    },
    textStyle:{
        fontWeight:'bold',
        fontSize:22
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
      }
});

//make this component available to the app
export default MyClass;
