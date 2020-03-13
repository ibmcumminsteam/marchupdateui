// Home screen
import React, { Component } from 'react';
//import react in our code.
import { Text, View, Image } from 'react-native';
//import all the components we are going to use.
// import MyHeader from "../screens/MyHeader";
import { Dimensions } from 'react-native';
import {Button, Content} from 'native-base';

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Getting Started',
   }

   constructor(){
    super();
   }
  render() {
    const navigation = this.props.navigation;
    return (
      <>
      <View style={{ backgroundColor: '#F8F6F8',}}>
        <Text>{"\n"}</Text>
        <Text style={{fontSize: 20, textAlign: 'center', fontFamily: 'sans-serif-medium'}}>Welcome to</Text>
        <Text style={{fontSize: 30, fontWeight: 'bold', textAlign: 'center',fontStyle: 'italic' , fontFamily: 'sans-serif-condensed'}}>IBM Cloud Pak System</Text>
        <Text style={{textAlign: 'center', fontSize:13, fontFamily: 'sans-serif-condensed'}}>This system of hardware and software with multiple 
          virtualization options helps you build, deploy and manage containerized apps
          and Kubernetes workloads on premises, at the edge or on any cloud.</Text>

        
      </View>
      <Image source={require('../assets/images/welcomeicps.png')} 
          
          
          style={{ 
            flex: 1,
            width: null,
            height: null,
            resizeMode:"contain", 
            backgroundColor: '#F8F6F8'
            }}
            // resizeMode="contain"
               
              />
               
               <View  style={{ backgroundColor: '#F8F6F8',}}>
              <Button small large light bordered style={{margin: 40, backgroundColor: "#14132f"}} 
              onPress ={()=>this.props.navigation.navigate('AdministrationConsole')} >
            <Text style={{color: "#ffffff", textAlign: "center", margin: 70}}>Administration Console</Text>
            
          </Button>
          </View>
      </>
    );
  }
}
