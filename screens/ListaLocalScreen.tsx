import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import datos from '../assets/Data/Futurama.json'
import Tarjeta from '../components/Tarjeta'

export default function ListaLocalScreen() {
  return (
    //console.log(datos), para ver el contenido del archivo JSON
    <View>
      <Text style={styles.text}>informacion de los personajes</Text>
      <FlatList
        data={datos}
        renderItem={({ item }) =>// para recorrer los arreglos y ver los datos


          
           <Tarjeta personajes ={item}/>
          
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  img: {
    width: 60,
    height: 60,
    
  },
  text:{
    textAlign:'center',
    padding:22,
    fontSize:30,
    fontWeight: 'bold'
  }
})