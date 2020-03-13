import 'react-native-gesture-handler';
import React, { Component } from 'react';

import { createAppContainer,  createSwitchNavigator } from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import AdministrationConsole from './AdministrationConsole';
import ClusterOverview from './navigation/ClusterOverview';
import Deploy from './navigation/Deploy';
import GettingStarted from './navigation/GettingStarted';
import Login from './Login';
import MyHeader from './screens/MyHeader';
import Screen2 from './Screen2';
import CloudScreen from './allscreens/CloudScreen';
import Catalog from './allscreens/Catalog';
import Hardware from './allscreens/Hardware';
import System from './allscreens/System';



const TabNavigation = createMaterialTopTabNavigator(
  {
    GettingStarted : {screen : GettingStarted, navigationOptions: {drawerLockMode: "locked-closed"}},
    Deploy : {screen : Deploy},
    ClusterOverview : { screen: ClusterOverview },
    // AdministrationConsole : { screen: AdministrationConsole },
    
    
    

  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#F8F8F8',
      style: {
        backgroundColor: '#14132f',
        
      },
      labelStyle: {
        textAlign: 'center',
        fontSize: 10
      },
      indicatorStyle: {
        borderBottomColor: '#87B56A',
        borderBottomWidth: 6,
      },
    },
  }
);


//making a StackNavigator to export as default
const StackNavigation = createStackNavigator({
  T1: {
    screen: TabNavigation,
    navigationOptions: {
      header: <MyHeader/>
    
    },
  }, 
  Login : {screen: Login, navigationOptions:{header: null, headerRight:{icon: 'home',} }}
},
{  
  initialRouteName: "Login"  ,
  navigationOptions :{
    drawerLabel: () => null,
    header: null,
      drawerLockMode: "locked-closed",
      disableGestures: true
}
} ,
);


const DrawerNavigation = createDrawerNavigator({

 Login:{ screen : StackNavigation , navigationOptions:{ header: null,
      // drawerLockMode: "locked-closed",
      }},
      AdministrationConsole: {screen: AdministrationConsole, navigationOptions:{ header: null,
        }},
        
       
      Patterns: {
        screen: Screen2
      },
      Catalog: {
        screen: Catalog
      },
      Cloud: {
        screen: CloudScreen
      },
      System: {
        screen: System
      }, 
      Hardware: {
        screen: Hardware
      },
      

  // Home: { screen: Home },
  // Contacts: { screen: Contact },

},
);




const MainNav = createSwitchNavigator({

  
  HomeDrawer : DrawerNavigation,  
  AuthStack : StackNavigation,

});

const AppContainer = createAppContainer(MainNav);

// const AppContainer = createAppContainer(DrawerAppNavigator);  
export default class App extends React.Component {  
 render() {  
      return (
      <>
      
      <AppContainer/>
      </>
      ) 
  }  
}