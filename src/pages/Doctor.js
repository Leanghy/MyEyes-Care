//import liraries
import React, { Component } from 'react';
import {
    Platform,
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

    constructor() {
        super()
        this.state = {
            dataSource: [],
            isLoading: true
        }
    }

    renderItem = ({ item }) => {
        return (
            <View>
                <TouchableOpacity style={{ flex: 1, flexDirection: 'row', marginBottom: 3 }}
                onPress={() => ToastAndroid.show(item.book_title, ToastAndroid.SHORT)}>
                <Image style={{ width: 180, height: 150, margin: 5, borderRadius: 2, borderColor: 'pink', border: 2 }} /*source={{ uri: item.picture }}*/
                    source={{ uri: 'http://app.khmer2you.com/Content/Document/Doctor/' + item.picture }} />

                <View >
                    <Text style={{ fontSize: 18, color: 'black', marginBottom: 5 }}>
                        Name: {item.doctor}
                    </Text>
                    <Text style={{ width: 200,height: 60,fontSize: 16 }}>
                        {item.specialist}
                    </Text>
                    <Text style={{ fontSize: 16}}>
                        Tel: {item.phone_number}
                    </Text>
                    <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignSelf:'stretch'}}>
                        <TouchableOpacity onPress={this.login} style={styles.button}>
                            <Text style={styles.buttonTextDetails}> Details</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                </TouchableOpacity>
                
                </View>
           
        )
    }

    componentDidMount() {
        const url = 'http://app.khmer2you.com/API/APIDOCTOR'
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
                    keyExtractor={(item, index) => index}
                />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
   , buttonTextDetails:{
        color:'white',
        fontSize:18,
        fontWeight:'500',
        backgroundColor:"green",
        margin:5,
        lineHeight:30,
        width:70
    }
});

//make this component available to the app
export default MyClass;
