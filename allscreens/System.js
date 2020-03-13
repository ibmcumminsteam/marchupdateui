import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text, } from 'react-native';
import MyOtherHeader from '../MyOtherHeader';
 
export default class System extends Component{

    static navigationOptions = ({ navigation }) => ({
        title:'System', 
      })

    render(){
        return(
          <><MyOtherHeader/>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              
          <Text>Under Deployment</Text>
          </View>
          </>
          
        )
    }
}