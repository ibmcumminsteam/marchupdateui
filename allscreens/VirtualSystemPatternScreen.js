  import React, { Component } from 'react';
  import { View, ScrollView, Text, ActivityIndicator} from 'react-native';
  import { Separator } from 'native-base';
  import AntIcon from "react-native-vector-icons/AntDesign";
  import { Col, Grid } from "react-native-easy-grid"; 
  import {AccordionList} from "accordion-collapse-react-native";


  export default class VirtualSystemPatternScreen extends Component {
  constructor(props) {
  super(props);
  this.state = {
  tableHead: ['App_Name','Creator'],
  widthArr: [80, 100 ],
  data: [{}],
  isLoggedIn : true,
  loading: true,
  username: '',
  password: '',
  hostname: '',
  url_received:'',
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



  url_received: 'virtsys',


  })

  }).then((response) => response.json())
  .then((responseJson) => {

  this.setState({
  data: responseJson, loading: false 
  });
  console.log(responseJson);

  }).catch((error) => {
  console.error(error);
  });
  }

  _head(item){
  return(
  <Separator bordered style={{}}>
  <Text style={{flexWrap: 'wrap'}}>{item.app_name}</Text>
  </Separator>
  );
  }

  _body(item){
  return (
  <View style={{padding:10}}>

  <Text style={{textAlign:'center'}}>Application ID : {item.app_id}</Text>
  <Text style={{textAlign:'center'}}>Application Type : {item.app_type}</Text>
  <Text style={{textAlign:'center'}}>Creator : {item.creator}</Text>
  <View style={{marginTop:30,flexDirection:'row'}}>

  <AntIcon  name="cloud" color="blue" size={20} style={{paddingLeft: 100}} />
  <AntIcon name="edit" color="blue" size={20} style={{paddingLeft: 10}} />
  <AntIcon name="export" color="blue" size={20} style={{paddingLeft: 10}}/>
  <AntIcon name="delete" color="blue" size={20} style={{paddingLeft: 10}}/>
  <AntIcon name="lock" color="blue" size={20} style={{paddingLeft: 10}}/>


  </View> 
  </View>
  );
  }

  render() {

  var list = []; 
  list = this.state.data;



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

  return (<> 
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
  <Text>Please wait while{"\n"}the Virtual System Patterns{"\n"}are loading      

  </Text>
  <ActivityIndicator size="large" color="#0000ff" /> 

  </View>
  </>);

  }

  else{

  return (

  <View style={{}}>
  <ScrollView style={{
  margin: 20 }}>
  <Grid  style={{}}>
  <Col> 
  <AccordionList
  list={list}
  header={this._head}
  body={this._body}
  />

  </Col>
  </Grid>
  </ScrollView>
  </View>
  )

  } 
  }
  }

