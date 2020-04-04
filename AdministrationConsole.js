
  import React from 'react';
  import { Text, View, Image, ScrollView , StyleSheet} from 'react-native';
  import {Card,ListItem} from 'react-native-elements';
  import MyOtherHeader from './screens/MyOtherHeader';

  export default class Contact extends React.Component {  
  static navigationOptions = {
  title: 'Administration\nConsole'
  }
  render() {  
  return (
  <>
  <View style={{flex:1}}>
  <MyOtherHeader/>
  <ScrollView style={{marginBottom:10}}>

  <ListItem 
  title = 'Configure the system settings'
  bottomDivider
  />
  <Card 
  title='Configure the management network' >
  <View style={styles.container}>
  <View style={styles.Container1}>
  <Image source={require('./assets/images/ibm1.png')} style ={{
  height: 100,
  width: 100 }}/>
  </View>
  <View style={styles.Container2}>
  <Text style={{marginBottom: 10}}>
  Configure the network address that is used to access management and deployment functions of the system
  </Text>
  </View>
  </View>
  </Card>

  <Card
  title='Configure DNS server'>
  <View style={styles.container}>
  <View style={styles.Container1}>
  <Image source={require('./assets/images/ibm2.png')} style ={{
  height: 100,
  width: 100 }}/>
  </View>
  <View style={styles.Container2}>
  <Text style={{marginBottom: 10}}></Text>
  <Text style={{marginBottom: 10}}>
  Set the search order of the DNS server
  </Text>
  </View>
  </View>
  </Card>

  <Card
  title='Configure the date and time'>
  <View style={styles.container}>
  <View style={styles.Container1}>
  <Image source={require('./assets/images/ibm3.png')} style ={{
  height: 100,
  width: 100 }}/>
  </View>
  <View style={styles.Container2}>
  <Text style={{marginBottom: 10}}></Text>
  <Text style={{marginBottom: 10}}></Text>
  <Text style={{marginBottom: 10}}>
  Specify the NTP servers that are used to manage the clock
  </Text>
  </View>
  </View>
  </Card>

  <ListItem
  title = 'Manage the infrastructure'
  bottomDivider
  />
  <Card 
  title='View the infrastructure map'>
  <View style={styles.container}>
  <View style={styles.Container1}>
  <Image source={require('./assets/images/ibmfour.png')} style ={{
  height: 100,
  width: 100 }}/>
  </View>
  <View style={styles.Container2}>
  <Text style={{marginBottom: 10}}></Text>
  <Text style={{marginBottom: 10}}></Text>
  <Text style={{marginBottom: 10}}>
  An overwiew of the entire hardware structure in a graphical perspective.This includes the hardware layout 
  and each components condition
  </Text>
  </View>
  </View>
  </Card>

  <Card
  title='Manage computer resources'>
  <View style={styles.container}>
  <View style={styles.Container1}>
  <Image source={require('./assets/images/ibm5.png')} style ={{
  height: 100,
  width: 100 }}/>
  </View>
  <View style={styles.Container2}>
  <Text style={{marginBottom: 10}}></Text>
  <Text style={{marginBottom: 10}}></Text>
  <Text style={{marginBottom: 10}}>
  View the current status and details of the computer resources in the environment
  </Text>
  </View>
  </View>
  </Card>

  <Card
  title='Manage storage resources'>
  <View style={styles.container}>
  <View style={styles.Container1}>
  <Image source={require('./assets/images/ibm6.png')} style ={{
  height: 100,
  width: 100 }}/>
  </View>
  <View style={styles.Container2}>
  <Text style={{marginBottom: 10}}></Text>
  <Text style={{marginBottom: 10}}></Text>
  <Text style={{marginBottom: 10}}>
  View the state, type and allocation of the storage resource of the environment
  </Text>
  </View>
  </View>
  </Card>
  </ScrollView>

  </View>
  </>
  ) 
  }  
  }
  const styles = StyleSheet.create({
  container: {
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  },
  Container1: {
  flex: 1,
  alignContent:'space-around'
  },
  Container2: {
  flex: 1
  }
  });
