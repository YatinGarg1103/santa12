import React ,{Component} from 'react'
import {Header,Icon} from "react-native-elements"
import {View,Text,StyleSheet} from 'react-native'
const MyHeader= props=>{
    return(
        <Header 
        leftComponent={<Icon name="bars" type='font-awasom' color='black' onPress={()=>props.navigation.toggleDrawer()} ></Icon>}
        centerComponent={{text:props.title,style:{color:"honeydew",fontSize:30}}}
        rightComponent={<This.belliconwithbadge  {...this.props}     />}
        backgroundColor="black"/>
    )
}
export default MyHeader ;
