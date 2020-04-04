import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class ClusterOverview extends React.Component {
  static navigationOptions = {
    title: 'Cluster Overview',
   }

   constructor(){
    super();
   }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Under Development</Text>
      </View>
    );
  }
}
