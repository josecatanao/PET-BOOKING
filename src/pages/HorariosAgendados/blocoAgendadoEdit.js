import React from 'react';
import {Text, StyleSheet,View,Image,TouchableOpacity} from 'react-native';



export default function BlocoDiaAgendadoEdit(props) {
    function apagar(){
        alert("clicou em apagar");
    }
    function editar(){
        alert("clicou em Editar");
    }
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
            <View style={styles.blocoagen}>
            <TouchableOpacity onPress={apagar}>
            <Image
                style={styles.logoedit}
                 onPress={apagar}
                 source={require('../../../assets/foto6.jpg')}
            ></Image>
            </TouchableOpacity>

            <TouchableOpacity onPress={editar}>
            <Image
                 style={styles.logoedit}
                 source={require('../../../assets/foto7.jpg')}
            ></Image>
            </TouchableOpacity>
            </View>
        </View>
            
    )
}

const styles = StyleSheet.create({
   
    blocoAg:{
        flexDirection: "row",
        justifyContent:"space-evenly",
        width:320,
        backgroundColor:"white",
        height:130,
        margin:15,
        borderWidth:2,
        borderColor:"#BDBDBD",
        borderRadius:5,
    },
    blocoData:{
        width:83,
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
        width:194,
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
    blocoagen:{
        height:130,
        justifyContent:"space-evenly",
    },
    logoedit:{
        width:22,
        height:25,
        borderWidth:1,
    }
})