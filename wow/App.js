import { StyleSheet, Text, View,Button, ScrollView } from 'react-native'
import React from 'react'
import Product from './component/ReduxComp/Product'
import Header from './component/ReduxComp/Header'

const App = () => {
const Data=[
  {name:"Iphone",
  price:200,
  color:"red",
  image:"https://media.istockphoto.com/id/1449090549/photo/mobile-phones-premium-png-digital-devices-for-mockup.jpg?s=612x612&w=0&k=20&c=cPezhefKNezsVuNaYC4XjLzTO0JPhv0nAW9DaiR7j60="
},
{
name:"Iphone12",
price:2000,
color:"grayblue",
image:"https://media.istockphoto.com/id/1449090549/photo/mobile-phones-premium-png-digital-devices-for-mockup.jpg?s=612x612&w=0&k=20&c=cPezhefKNezsVuNaYC4XjLzTO0JPhv0nAW9DaiR7j60="
},
{name:"Iphone12promax",
price:20000,
color:"green",
image:"https://media.istockphoto.com/id/1449090549/photo/mobile-phones-premium-png-digital-devices-for-mockup.jpg?s=612x612&w=0&k=20&c=cPezhefKNezsVuNaYC4XjLzTO0JPhv0nAW9DaiR7j60="
},
]
  return (
    <View style={{flex:1,justifyContent:"flex-end"}}>
    <Header></Header>
     <ScrollView>
      {
        Data.map((item)=><Product item={item}/>)
      }
     </ScrollView>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
text:{fontSize:40,marginTop:20,marginBottom:100}
})
