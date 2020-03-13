import React, { Component } from 'react'
import { View, Text, ActivityIndicator, ScrollView,StyleSheet } from 'react-native'
// import { string } from 'prop-types'
// import axios from 'axios';
// function Separator() {
// return <View style={styles.separator} />;
// }

class DumpScreen extends Component {
state = {
data: [{}],
loading: true,
}
componentDidMount = () => {
fetch('https://api.myjson.com/bins/y26zw', {
method: 'GET'
})
.then((response) => response.json())
.then((responseJson) => {
// console.log(responseJson);
this.setState({
data: responseJson, loading: false 
});
})
.catch((error) => {
console.error(error);
});

// this.setState({loading: true});

}
render() {
var list = []; 
list = this.state.data;

if(this.state.loading){

return (<> 
<View style={{marginTop: 200}}>
<Text>Please wait while{"\n"}the Virtual System Patterns{"\n"}are loading      

</Text>
<ActivityIndicator size="large" color="#0000ff" /> 

</View>
</>);

// this.setState({loading:false});
}
else{



return (
<>
<ScrollView>
<View>

<Text style={{marginTop: 100}}>

</Text>
{console.log("balehbaleh!!")}
{console.log(list)}
{console.log(typeof(list))}
{/* {list[0]['app_type']} */}

{list.map(list => 
<Text>
Application ID:{"\t"}{list.app_id}{"\n"}

_____________________________________
</Text>
)}




</View>
</ScrollView>
</>
)
}
}
}

const styles = StyleSheet.create({


// separator: 
});
export default DumpScreen;