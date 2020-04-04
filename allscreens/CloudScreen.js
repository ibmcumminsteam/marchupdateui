import React, { Component } from 'react';
import { View, ScrollView, Text,ActivityIndicator } from 'react-native';
import { Separator } from 'native-base';
import {AccordionList} from "accordion-collapse-react-native";
import MyHeader from "./MyHeader";

export default class CloudScreen extends Component {
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
    
  
        url_received: 'cloud',
        
    
      })
    
    }).then((response) => response.json())
          .then((responseJson) => {
  
            this.setState ({
                data:responseJson, loading: false,
            })
          }).catch((error) => {
            console.error(error);
          });
  
  
}

_head(item){
  return(
      <Separator bordered style={{}}>
        <Text style={{textAlign:'left',height: 40}} >{item.name}</Text>
      </Separator>
  );
}

_body(item){
  return (
      <View style={{padding:15}}>
        <Text style={{textAlign:'left'}}>Application ID : {item.id}</Text>
        <Text style={{textAlign:'left'}}>Storage Reserved : {item.productid}</Text>
      </View>
  );
}
 
  render() {

    
 
    var list = []; 
    list = this.state.data;
    var dataArray = [] ;

    var new_arr = [];
    new_arr = list[0].licenses_limits;
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
      <Text style={{margin:50}}>Please wait while{"\n"}the Environment Profiles{"\n"}are loading      
   
      </Text>
      <ActivityIndicator size="large" color="#0000ff" /> 
   
      </View>
      </>);
   
      }
else{

    return (
        
      <View style={{paddingBottom:300}}>
        <MyHeader/>
        <Text style={{ fontSize: 25, backgroundColor: '#F0F0F0',}}>Environment Profiles</Text>
      
<Text style={{ fontSize: 20,margin:20}}>Data for: {list[0].name}</Text>
<ScrollView style={{marginLeft:20,marginRight:20,marginTop:20,alignSelf:'flex-end' }}>





<AccordionList
            list={new_arr}
            header={this._head}
            body={this._body}
        />
</ScrollView>

      </View>
    )
      }

  }}
