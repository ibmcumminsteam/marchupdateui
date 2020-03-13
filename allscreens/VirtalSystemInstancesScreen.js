import React, { useState } from 'react';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Button, TouchableHighlight } from 'react-native-elements';

import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  // Button,
  StyleSheet,
  Image,
  NativeAppEventEmitter,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Header, SearchBar} from 'react-native-elements';

function Separator() {
  return <View style={styles.separator} />;
}


class VirtualPatternScreen extends React.Component{
//   static navigationOptions = {
//     drawer: () => ({
//         label: 'Screen number 2',
//     }),
// }
static navigationOptions = ({ navigation }) => ({
  title:'Virtual System Instances', 
})
 render(){
  
  return (

      <ScrollView>

        
      <View style={{flex: 1, flexDirection: 'column'}}> 
              {/* <Text numberOfLines={1} style={styles.subhead}>Virtual System Instances</Text> */}
              <SearchBar 
              
               placeholder="Filter"
               onChangeText={this.updateSearch}
              platform="android" placeholderTextColor="blue"/>
              </View>

              {/* <Button title="Create New" type="clear" type="outline"  style={{flexDirection:'row'  }}/> */}
              <Separator />
            

             {/* <Icon name="play" size={30} color="#32CD32" /> */}
              
           

              <Grid style={styles.serverTable}>
              <Col style={styles.col1}>
              <Text style={{fontSize: 20}}>Name</Text>
              <Text>           </Text>
              <Row><Text>DD Server</Text></Row>
              <Text>           </Text>
              

              <Row style={{backgroundColor: '#A9A9A9'}}><Text>Default Db2 for Linux</Text></Row>
              <Text>           </Text>
              <Row ><Text>IBM Cloud Private</Text></Row>
              <Text>           </Text>
              <Row ><Text>preethi_IBM Control Desk</Text></Row>
              {/* <Text>           </Text> */}
              </Col>  


              <Col style={styles.col1} >
              <Text style={{fontSize: 20}}>Status</Text>
              <Text>           </Text>
              <Row ><Text>Running</Text></Row>
              <Text>           </Text>
              

              <Row style={{backgroundColor: '#A9A9A9'}}><Text>Running</Text></Row>
              <Text>           </Text>
              <Row ><Text>Running</Text></Row>
              <Text>           </Text>
              <Row ><Text>Launching</Text></Row>
              {/* <Text>           </Text> */}
              </Col> 
              </Grid>
              <Separator /> 


              <View style={{ paddingTop:0}}>
              <Text style={{color:'#0000cc', paddingLeft:10, fontSize:20}}>Default Db2 for Linux</Text>
              <Text>          </Text>
              <Text>          </Text>

              <View style={styles.iconss}>
              <Icon name="refresh" size={20} color="#32CD32" style={{paddingRight: 19, paddingLeft: 130}}/>  
              <Icon name="play" size={20} color="#32CD32" style={{paddingLeft: 19}}/>  
              <Icon name="stop" size={20} color="#32CD32" style={{paddingLeft: 19}}/>  
              <Icon 
              name="cog" 
              size={20} 
              color="#32CD32" 
              style={{paddingLeft: 19}}
              onPress={() => this.props.navigation.navigate('Screen3')}
              />  
              <Icon name="trash" size={20} color="#32CD32" style={{paddingLeft: 19}}/>  
              <Icon name="lock" size={20} color="#32CD32" style={{paddingLeft: 19}}/>  
              <Icon name="unlock" size={20} color="#32CD32" style={{paddingLeft: 19}} />  
              </View>
              

              <Text>          </Text>           

              <View style={{paddingLeft: 8, paddingRight: 8}}>
              <Text >ID                                 d-20-34abcdefghijkle12345</Text>
              <Text>           </Text>
              <Separator/>
              <Text>Status                          Running</Text>
              <Text>           </Text>
              <Separator/>

              <Text>Created By                  admin</Text>
              <Text>           </Text>
              <Separator/>

              <Text>Created On                 October 2, 2019, 3:46:00 PM </Text>
              <Text>           </Text>
              <Separator/>

              <Text>Expires On                  No Expiration Date </Text>
              <Text>           </Text>
              <Separator/>

              {/* <View style={{ flexDirection:'row' }}>
              <Button title="Change"/>
              </View> */}
              {/* <Text>           </Text> */}
              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
              <Text>Priority                        Medium</Text>
              <Button style={{paddingLeft: 20}} title="Change"  type="outline" /></View>
              
              <Separator/>

              <Text>In Cloud Group           Shared </Text>
              <Text>           </Text>
              <Separator/>

              <Text>Referenced                 System Monitoring</Text>
              <Text>           </Text>

              <Separator/>

              <Text>Shared Devices          System Monitoring for Db2</Text>
              

          <Text>                                    Application Server</Text>
          <Text>           </Text>


              <Separator/>
              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
              <Text>Pattern Type              </Text>
              <Text>Visual System</Text>
              </View>
              <Button style={{paddingLeft: 250, paddingTop: -70, marginTop: -12}} type="outline" title="Check for Updates" color="white" onPress={() => alert("Updates will be processed in the background!")}/>
              </View>
              <Text>           </Text>
              <Separator/>
              <Text>From Pattern                 Default Db2 OLTP</Text>
              <Text>           </Text>


              </View>
          

              
             
     

              </ScrollView>
    
  );
};
}


const styles = StyleSheet.create({
  col1:{
    backgroundColor: '#D3D3D3',
    marginBottom: 15,
    
  },
  iconss:{
  paddingLeft: 8,
  width: 100,
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start'
  },
  submit:{},
  serverTable:{
      paddingTop: 30,
      paddingLeft: 15,
      paddingRight: 15,
      // paddingBottom: -12,
      
      // backgroundColor: 'red',
  },
  subhead: {
    fontSize: 20,
    // backgroundColor: '#D3D3D3',
    paddingBottom: 30,
    paddingLeft: 10,
    
  },
  scrollView: {
    // backgroundColor: Colors.lighter,
  },
  
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginLeft: 2
  },
});

export default VirtualPatternScreen;
