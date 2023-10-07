import { View, Text, Image, StyleSheet, Button } from 'react-native'
import React,{ useState} from 'react'
import {useDispatch}from "react-redux"
import { Add_To_Card} from '../Redux/Slice';
const Product = (props) => {

   const dispatch=useDispatch();
   
    const item=props.item
   
   
  return (
    <View style={style.box}>
      <Text style={style.item}>{item.name}</Text>
      <Text style={style.item}>{item.price}</Text>
      <Text style={style.item}>{item.color}</Text>
      <Image source={{uri:item.image}} style={{height:200,width:250}}></Image>
      
          <Button title='Add Card' onPress={()=>dispatch(Add_To_Card(item))}></Button>

    </View>
  )
}

export default Product
const style=StyleSheet.create({
     box:{
      borderWidth:3,
      borderRadius:20,
      
      elevation:2,
      justifyContent:"center",
      textAlign:"center",
      textAlignVertical:"center",
      overflow:"hidden",
      padding:20,
      margin:10
     },
     item:{
        fontSize:20,
        borderWidth:0.5
     }
})