import { Image, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import React from 'react'

export default function Tarjeta(props: any) {
    //console.log(props.personajes.imagenes.main;
    function mensaje(data: any) {
        Alert.alert( data.name.first, data.occupation )
    }
    return (
        <TouchableOpacity style={styles.container} onPress={() => mensaje(props.personajes)}>

            <View style={styles.contenido}>
                <Image source={{ uri: props.personajes.images.main }} style={styles.img} />
                <View>
                    <Text>{props.personajes.name.first}</Text>
                    <Text>{props.personajes.name.last}</Text>

                </View>

            </View>


        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 120,
        height: 200,
        resizeMode: 'contain'

    },
    container: {
        backgroundColor: '#35d01699',
        margin: 5,
        borderRadius: 20,
        padding: 10
    },
    contenido: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})