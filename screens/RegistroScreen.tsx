import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function RegistroScreen() {
const [nick, setnick] = useState("juan")
const  [nombre, setnombre] = useState("")
const  [edad, setedad] = useState(0)
  function registrar(){

    Alert.alert("Mensaje","El usuario"+nick+" se ha registrado, con una edad de: "+ edad)
    console.log("el usuario se ha registrado")
  }
  return (
    <View style={styles.container}>
      <Text>{nick}</Text>
      <Text style={{ fontSize: 35 }}>REGISTRO</Text>
      <TextInput
        placeholder='INGRESAR NICK'
        style={styles.input}
        onChangeText={(texto )=> setnick(texto)}//front => back
      value= {nick}// back => front
      />

      <TextInput
        placeholder='INGRESAR NOMBRE'
        style={styles.input}
        onChangeText={(texto )=> setnombre(texto)}
        value= {nombre}
      />

      
<TextInput
        placeholder='INGRESAR EDAD'
        style={styles.input}
        keyboardType='numeric'
        onChangeText={(texto )=> setedad( +texto)}
        value= {edad.toString()}
      />

      <Button title='REGISTRAR' color={'green'} onPress={()=> registrar()}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dd994b',
    flex: 1,
    justifyContent:'center',
    alignItems:'center'

  },
  input:{
    backgroundColor:'#efdbcd',
    margin:10,
    fontSize:20,
    height:60,
    width:"80%",
    borderRadius:20,
    paddingHorizontal: 20,
    borderColor:'black',
    borderWidth:2,

  }

})