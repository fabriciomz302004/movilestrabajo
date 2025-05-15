import { Alert, Button, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function Tarjeta(props: any) {
    const [modalVisible, setModalVisible] = useState(false);
    
    return (
        
        <TouchableOpacity style={styles.container} onPress={() => setModalVisible(true)}>
            <View style={styles.contenido}>
                <Image source={{ uri: props.personajes.images.main }} style={styles.img} />
                <View style={styles.contenido}>
                    <View style={styles.names}>
                    <Text style={styles.names}>{props.personajes.name.first}</Text>
                    <Text style={styles.names}>{props.personajes.name.last}</Text>
                    </View>
                </View>
            </View>
            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalBg}>
                    <View style={styles.modalContent}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{props.personajes.name.first} {props.personajes.name.last}</Text>
                        <Text>Ocupación: {props.personajes.occupation}</Text>
                        <Image source={{ uri: props.personajes.images.main }} style={styles.img} />
                        <Text>planeta: {props.personajes.homePlanet}</Text>
                        <Text>edad: {props.personajes.age}</Text>
                        <Text>sexo: {props.personajes.gender}</Text>
                        <Button title="Cerrar" onPress={() => setModalVisible(false)} />
                    </View>
                </View>
            </Modal>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
    },
    container: {
        backgroundColor: '#82b116fc',
        borderRadius: 20,
        margin: 5,
        padding: 10,
    },
    contenido: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    modalBg: {
        flex: 1,
        backgroundColor: 'rgba(190, 187, 187, 0.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#279e10fc',
        padding: 20,
        borderRadius: 15,
        alignItems: 'center',
        minWidth: 250,
    },
    names:{
        fontSize:30,
        padding:5,
        textAlign:'center',
        alignSelf:'center',
        


    }
})