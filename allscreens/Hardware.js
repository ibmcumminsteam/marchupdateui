    import React, { Component } from 'react';
    import {View, Text, } from 'react-native';
    import MyOtherHeader from '../screens/MyOtherHeader' ;


    export default class Hardware extends Component{

    static navigationOptions = ({ navigation }) => ({
    title:'Hardware', 
    })

    render(){
    return(
    <><MyOtherHeader/>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

    <Text>Under Development</Text>
    </View>
    </>
    )
}
    }
