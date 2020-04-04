  import React, { Component } from 'react';
  import { StyleSheet, View, ScrollView, Text,ActivityIndicator } from 'react-native';
  import { Separator } from 'native-base';
  import {AccordionList} from "accordion-collapse-react-native";
  import AntIcon from "react-native-vector-icons/AntDesign";
  import Icon from 'react-native-vector-icons/FontAwesome';
  import MyOtherHeader from "../screens/MyOtherHeader";

  export default class Catalog extends React.Component{

  constructor(props) {
  super(props);
  this.state = {
  data: [{}],
  isLoggedIn : true,
  loading: true,
  }
  }
  componentDidMount = () => {
  fetch('http://9.102.0.29/ibm/menu.php',  {
  method: 'POST',
  headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  },
  body: JSON.stringify({

  url_received: 'vimage',

  })

  }).then((response) => response.json())
  .then((responseJson) => {
  console.log(responseJson);
  console.log(typeof(responseJson));
  this.setState ({
  data:responseJson , loading:false
  })

  }).catch((error) => {
  console.error(error);
  });
  }

  _head(item){
  return(
  <Separator bordered style={{}}>
  <Text style={{textAlign:'left'}} >{item.name}</Text>
  </Separator>
  );
  }

  _body(item){
  return (
  <View style={{padding:15}}>
  <Text style={{textAlign:'left'}}>Version : {item.version}</Text>
  <Text style={{textAlign:'left'}}>State : {item.currentstatus_text}</Text>
  <Text style={{textAlign:'left'}}>Description : {item.description}</Text>
  <Text style={{textAlign:'left'}}>Operating System : {item.operatingsystemdescription}</Text>

  <View style={{marginTop:30,flexDirection:'row'}}>

  <AntIcon  name="export" color="blue" size={20} style={{paddingLeft: 100}} />
  <Icon name ="clone" color="blue" size={20} style={{paddingLeft: 100}} />

  </View>

  </View>
  );
  }


  render() {


  var list = []; 
  list = this.state.data;
  var dataArray = [] ;

  let {isLoggedIn} = this.state;
  let getData = false ;
  let name ;
  let i = 1 ;
  const renderPattern = (app_name )=>{
  getData = true ;
  name = app_name ;
  alert(name.app_name)

  }

  if(this.state.loading){

  return (
  <> 
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
  <Text>Please wait while{"\n"}the Virtual Images{"\n"}are loading      

  </Text>
  <ActivityIndicator size="large" color="#0000ff" /> 

  </View>
  </>);

  }
  else{

  return (

  <View style={{paddingBottom:300}}>
  <MyOtherHeader/>
  <Text style={{ fontSize: 25, backgroundColor: '#F0F0F0',}}>Virtual Images</Text>

  <ScrollView style={{marginLeft:20,marginRight:20,marginTop:20,}}>

  <AccordionList
  list={list}
  header={this._head}
  body={this._body}
  />


  </ScrollView>

  </View>
  )
  }
  }

  }
