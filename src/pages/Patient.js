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
    ToastAndroid,Button
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
            <TouchableOpacity style={{ flex: 1, flexDirection: 'row', marginBottom: 3 }}
                onPress={() => ToastAndroid.show(item.book_title, ToastAndroid.SHORT)}>
                <Image style={{ width: 190, height: 150, margin: 5, borderRadius: 2, borderColor: 'pink', border: 2 }} /*source={{ uri: item.picture }}*/
                    source={{ uri: 'http://app.khmer2you.com/Content/Document/Patient/' + item.picture }} />

                <View >
                    <Text style={{ fontSize: 18, color: 'black' }}>
                        Patient: {item.name}
                    </Text>
                    <Text style={{fontSize: 12 ,width:200}}>
                        Email: {item.email}
                    </Text>
                    <Text style={{ fontSize: 16 ,height:70}}>
                        Tel: {item.phone}
                    </Text>

                    <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignSelf: 'flex-end'}}>
                    <TouchableOpacity onPress={this.login} style={styles.button}>
                        <Text style={styles.buttonTextEdit}>  Edit</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={this.login} style={styles.button}>
                        <Text style={styles.buttonTextDetails}> Details</Text>
                    </TouchableOpacity>

                    {/* <Button
                        onPress={this.login}
                        title="Details"
                        color="#841584"
                        margin="10"
                        /> */}
                </View>
                </View>
            </TouchableOpacity>
        )
    }

    componentDidMount() {
        const url = 'http://app.khmer2you.com/API/APIPATIENT'
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
        alignItems: 'center',
    },
    buttonTextDetails:{
        color:'white',
        fontSize:18,
        fontWeight:'500',
        backgroundColor:"#841584",
        margin:5,
        lineHeight:30,
        width:70
    } , 
    buttonTextEdit:{
        color:'white',
        fontSize:18,
        fontWeight:'500',
        backgroundColor:"green",
        margin:5,
        lineHeight:30,
        width:50
    }
});

//make this component available to the app
export default MyClass;
