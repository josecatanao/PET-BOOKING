import React from 'react';
import {Text, StyleSheet,View,Image} from 'react-native';



export default function BlocoDiaAgendado(props) {
    return(
        <View style={styles.blocoAg}>
            <View style={styles.blocoData}>
                <Text style={styles.label}>Data:</Text>
                <Text style={styles.textoData}>{props.data}</Text>
            </View>
            <View style={styles.blocoHorario}>
                <Text style={styles.label}>Tipo atendimento:</Text>
                <Text style={styles.texto}>{props.turno}</Text>
                <Text style={styles.label}>Descriação:</Text>
                <Text style={styles.texto}>{props.horario}</Text>
            </View>
        </View>
            
    )
}

const styles = StyleSheet.create({
   
    blocoAg:{
        flexDirection: "row",
        justifyContent:"space-evenly",
        width:300,
        backgroundColor:"white",
        height:130,
        margin:15,
        borderWidth:2,
        borderColor:"#C8FDDA",
        borderRadius:5,
    },
    blocoData:{
        width:90,
        height:130,
        justifyContent:"center",
        alignItems:"center",
    },
    label:{
        color:"black",
        fontSize:16,
        marginTop:3,
        fontWeight:"bold"
    },
    blocoHorario:{
        width:200,
        height:130,
        
    },
    textoData:{
        color:"#3D70FF",
        fontSize:14,
        fontWeight:"bold"
    },
    texto:{
        color:"#878787",
        fontSize:14,
    },
})