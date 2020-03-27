import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, Image, ImageBackground, ActivityIndicator } from "react-native";
import TextField from "../components/TextField";


let namesArray = ['prashant', 'achal', 'ganesh'];

export default class Home extends Component {
    getName=(p)=>{
        alert('hello im codegrabs: ' + p);
    }
    render() {
        return (
            <View style={{}}>
                <View>
                    {/* this is simple load listing data with control  */}
                    {namesArray.map((item, index) => {
                        return <View style={{ flex: 1, flexDirection: 'column' }} key={index}>
                            <Text style={{ color: '#63259', fontSize: 25 }}>{item}</Text>
                        </View>
                    })}
                </View>
                <View>
                    {/* dyamic control create and apply css and property checking  */}
                    {/* <View style={{ flex: 1, backgroundColor: 'green', height: 100 }}>
                        <TextField value="ganesh" />
                        <TextField style={{ color: 'red' }} value="akash" />
                    </View> */}
                </View>
                <View>
                    <TouchableOpacity style={{ backgroundColor: 'black', borderRadius: 50, alignItems: 'center', paddingVertical: 10, width: '90%', alignSelf: 'center' }}
                        onPress={() => { this.getName('hello') }}
                    ><TextField value="Press me" /></TouchableOpacity>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

})
