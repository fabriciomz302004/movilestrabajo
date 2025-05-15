import { Alert, Button, Image, ImageBackground, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function BoletosScreen() {
    /*crear una ventana que calcule la venta de boletos para un concierto
     Si la persona es mayor de 60 años, se aplica un dfescuento del 50%
     no se admiten ventasa menores de edad
     la aplicacion debe permitir ingresar la cantidad de boletos a vender
     el precio del boleto es de $55 */

    const [edad, setedad] = useState("")
    const [boleto, setboleto] = useState(0)
    const [modal, setmodal] = useState(false)

    // Precio del boleto
    const precioBoleto = 55;

    //  para calcular el precio total
    const calcularTotal = () => {
        const edadNum = parseInt(edad);

        if (isNaN(edadNum) || edadNum <= 0) {
            Alert.alert('Error', 'por favor, ingrese una edad valida.');
            return;
        }

        if (edadNum < 18) {
            Alert.alert('venta no permitida', 'no se permite vender a menores de edad.');
            return;
        }

        let total = boleto * precioBoleto;

        if (edadNum >= 60) {
            total *= 0.5; // aplicar descuento del 50%
        }

        Alert.alert('Total de Venta', `El total a pagar es: $${total.toFixed(2)}`);
    };




    return (

        <ImageBackground
            source={require("../assets/image/Fondo.png")}
            style={styles.container}>

            <Text style={{ color: 'white', fontSize: 40 }}>BOLETO</Text>
            <TextInput style={styles.input}
                placeholder='ingresar edad' keyboardType='numeric' value={edad} onChangeText={setedad}
            />
            <View style={styles.boleto}>
                <Button title='-' color={'red'} />
                <Text style={{ color: 'withe', fontSize: 35 }}>{boleto}</Text>
                <Button title='+' color={'green'} onPress={() => setboleto(boleto + 1)} />
            </View>
            <Button title='Calcular' onPress={calcularTotal} />

            <Modal visible={modal} transparent={true}>
                <View style={styles.modal}>
                    <View style={styles.modalcontainer}>
                        <Text >TOTAL DE VENTAS DE BOLETOS</Text>
                        <Image source={{ uri: 'https://4kwallpapers.com/images/walls/thumbs_3t/11624.jpg' }} style={styles.image} />
                        <TouchableOpacity style={styles.btn} onPress={() => setmodal(false)} >
                            <Text style={{ color: 'withe', fontSize: 35 }}>Cerrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    boleto: {
        backgroundColor: "#de944f4a",
        flexDirection: 'row',
        height: 50,
        width: "50%",
        justifyContent: 'space-between',

    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 20

    },
    btn: {
        backgroundColor: "#5ec44a",
        marginTop: 20,
        width: "75%",
        height: 50,
        alignItems: 'center',
        borderRadius: 20,
        justifyContent: 'center'
    },
    modal: {
        backgroundColor: "#d3dbd14a",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalcontainer: {
        backgroundColor: 'white',
        width: "80%",
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    input: {
        fontSize: 25,
        backgroundColor: '#f4ab66ab',
        margin: 5,
        width: "50%",
        height: 50,
        borderRadius: 20,
        paddingHorizontal: 20

    },
})