import { Background } from '@react-navigation/elements';
import { useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const buttons = [
    ['7', '8', '9', '÷'],
    ['4', '5', '6', '×'],
    ['1', '2', '3', '-'],
    ['0', 'C', '=', '+'],
  ];


export default function Calculator(){

  const[input,setinput]= useState('text input')
  const[output,setoutput] = useState('text output')


function handlePress(value:string){


}
  return <SafeAreaView style={styles.container}>

    <View style = {styles.screen}>
      <Text style={styles.input}>
        {input}
      </Text>
      <Text style={styles.output}>
        {output}
      </Text>
    </View>
    <View >
      {buttons.map((item, index)=>
      (
          <View key={index} style={{flexDirection:'row'}}>
            {item.map((value)=>(
          <TouchableOpacity key={value}
          onPress={handlePress(value)}
          >
            <Text style={styles.text}>
              {value}
            </Text>
          </TouchableOpacity>
        ))}
          </View>
      ))}
    </View>
  </SafeAreaView>
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"black",
    alignItems:'center',

  },
  screen:{
    // flex:0.5,
    backgroundColor:'blue',
    margin:20,
    padding:30,
    height:100,

  },
  input:{

  },
  output:{


  },
  text:{
    color:'white',
    fontSize:50,
    backgroundColor:'#8A2BE2',
    borderRadius:15,
    margin:10,
    padding:10,
    maxWidth:150,
    minWidth:50,
    textAlign:'center',

  },
})