import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function CalcularScreen() {
    /*
    Verificar si el usuario es mayor de edad, de ser asi calcular el salario anual en base al salario ingresado
    agregar el decimo tercer y cuarto sueldo al salario
    */ 
    
    const [nombre, setnombre] = useState("")
    const [edad, setedad] = useState(0)
    const [salario, setsalario] = useState(0)

    useEffect(() => {
        if (Number.isNaN(edad)) {
            Alert.alert("Error", "No se acepta texto")
            setedad(0)
        }
        if (Number.isNaN(salario)){
            Alert.alert("Error", "No se acepta texto")
            setsalario(0)
        }


    }, [edad,salario])

    function calcular(){
        let salarioanual;
        if( edad>= 18){
            salarioanual= salario*12 
            Alert.alert("EL salario anual es:"+ salarioanual)

        }else{
            Alert.alert('Error, El empleado tiene que ser mayor de edad')
        }
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 40 }}>Calculo</Text>

            <TextInput
                placeholder='Ingresar nombre'
                style={styles.input}
                placeholderTextColor={'#8cf25a'}
                onChangeText={(texto) => setnombre(texto)}
                value={nombre}
            />

            <TextInput
                placeholder='Ingresar nombre'
                style={styles.input}
                onChangeText={(texto) => setedad(+texto)}
                value={edad.toString()}
            />

            <TextInput
                placeholder='Ingresar nombre'
                style={styles.input}
                onChangeText={(texto) => setsalario(+texto)}
                value={salario.toString()}
            />
            <TouchableOpacity style={styles.btn} onPress={calcular}>
                <Text style={{ fontSize: 30 }}>VERIFICAR</Text>
                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/6394/6394673.png" }}
                    style={styles.image} />
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d2d1d1',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    input: {
        fontSize: 25,
        backgroundColor: '#ffffff',
        margin: 5,
        width: "90%",
        height: 50,
        borderRadius: 20,
        paddingHorizontal: 20

    },
    btn: {
        backgroundColor: "#5ec44a",
        marginTop: 20,
        width: "75%",
        height: 150,
        alignItems: 'center',
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    image: {
        width: 90,
        height: 90,

    }
})