//import liraries
import React, { Component } from 'react';
import {Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    ActivityIndicator,
    TouchableOpacity,
    ToastAndroid
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
      'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
  });
// create a component
class MyClass extends Component {
    // state ={
    //     data:[
    //         {key:'One'},
    //         {key:'Two'}
    //     ],

    //     students:[
    //         {key:'Mr A'},
    //         {key:'Mr B'}
    //     ]
    // };

    constructor() {
        super()
        this.state = {
            dataSource: [],
            isLoading: true
        }
    }

    renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={{ flex: 1, flexDirection: 'row', marginBottom: 3 }}
                onPress={() => ToastAndroid.show(item.book_title, ToastAndroid.SHORT)}>
                <Image style={{ width: 80, height: 80, margin: 5 }} source={{ uri: item.image }} />

                <View >
                    <Text style={{ fontSize: 18, color: 'green', marginBottom: 15 }}>
                    Title: {item.Username}
                    </Text>
                    <Text style={{ fontSize: 16, color: 'red' }}>
                    Name : {item.Password}
                    </Text>
                    <Text style={{ fontSize: 16, color: 'red' }}>
                    Age: {item.User_ID}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

    componentDidMount() {
        // const url = 'http://www.json-generator.com/api/json/get/bTWQsuBVCG?indent=2'
        const url = 'http://app.khmer2you.com/API/APIUSER'
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    dataSource: responseJson,
                    isLoading: false
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={this.renderItem}
                    keyExtractor={(item,index)=>index}
                />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        marginTop:30,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default MyClass;
