import React from 'react';
import {Text, StyleSheet,View,Image} from 'react-native';



export default function BlocoDiaAgendado(props) {
    return(
        <View style={styles.blocoAg}>
            <View style={styles.blocoDiaData}>
                <Text style={styles.dia}>{props.data}</Text>
            </View>
            <View style={styles.blocoHorario}>
                <Text style={styles.turno}>{props.turno}</Text>
                <Text style={styles.horario}>{props.horario}</Text>
            </View>
            <View style={styles.blocoagen}>
            <Image
                 source={require('../../../assets/foto5.jpg')}
            ></Image>
            </View>
        </View>
            
    )
}

const styles = StyleSheet.create({
   
    blocoAg:{
        flexDirection: "row",
        justifyContent:"space-evenly",
        width:260,
        backgroundColor:"white",
        height:65,
        marginTop:20,
        borderWidth:1,
        borderColor:"#BDBDBD",
        borderRadius:5,
    },
    blocoDiaData:{
        width:67,
        height:63,
        justifyContent:"center",
        alignItems:"center",
    },
    dia:{
        color:"#3D70FF",
        fontSize:55,
        fontWeight:"bold"
    },
    blocoHorario:{
        width:105,
        height:63,
        justifyContent:"center",
        alignItems:"center",
    },
    turno:{
        color:"#BDBDBD",
        fontSize:30,
        fontWeight:"bold"
    },
    horario:{
        color:"black",
        fontSize:15,
        fontWeight:"bold",
        marginBottom:5,
    },
})