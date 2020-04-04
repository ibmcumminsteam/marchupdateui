    import React from 'react';
    import { withNavigation } from 'react-navigation';
    import {Header} from 'react-native-elements';

    class MyHeader extends React.Component{
    constructor() {

    super() ;
    }
    render(){
    const navigation = this.props.navigation;
    return (
        <Header
            statusBarProps={{ barStyle: 'light-content' }}
            barStyle="light-content" 
            leftComponent={{ icon: 'menu', color: '#fff', onPress: ()=>this.props.navigation.openDrawer()}}
            centerComponent={{ text: 'IBM Cloud Pak System', style: { color: '#fff'} }}
            rightComponent={{ icon: 'home', color: '#fff'}}
            containerStyle={{
            backgroundColor: '#14152b',
            justifyContent: 'space-around',
            }}
        />     
    );
    };       
    }
    export default withNavigation(MyHeader);
