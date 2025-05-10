import { FlatList, FlatListComponent, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function ListaExternaScreen() {
    const [data, setdata] = useState([])
async function cargar(){
    const resp = await fetch('https://jritsqmet.github.io/web-api/videojuegos.json');
    const json = await resp.json();
    setdata(json.videojuegos);
}
  useEffect(() => {
   cargar()
   console.log(data);
  }, [])
  
  return (
    <View>
      <Text>ListaExternaScreen</Text>
      <FlatList
      data={data}
      renderItem={({item}: any)=>
    <Text>{item.titulo}</Text>
    }
      
      />
    </View>
  )
}

const styles = StyleSheet.create({})