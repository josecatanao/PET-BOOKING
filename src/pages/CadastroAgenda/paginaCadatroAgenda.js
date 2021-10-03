import React,{useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';



export default function Cadastro() {

    const [dia,setDia] = useState('');
    const [periodo,setPeriodo] = useState('');
    const [horario,setHorario] = useState('');

    function enviarDados(){
       //dia
       //periodo
       //horario 

    }

    return(
        <View  style={styles.blocoTudo}> 
            <Text  style={styles.titulo} >Cadastro da agenda</Text>
            <Image
                 style={styles.foto1}
                 source={require('../../../assets/foto1.jpg')}
            ></Image>

        <TextInput
            style={styles.input}
            value={dia}
            onChangeText={ (dia)=>setDia(dia) }
            placeholder="Digite o dia Ex:21"
            keyboardType="numeric"
         />
         <TextInput
           style={styles.input}
           value={periodo}
           onChangeText={ (periodo)=>setPeriodo(periodo) }
           placeholder="Período Ex: Manhã "
         />
         <TextInput
           style={styles.input}
           value={horario}
           onChangeText={ (horario)=>setHorario(horario) }
           placeholder="Horário Ex: 8:30 ~ 9:00"
         />

        <TouchableOpacity
            style={styles.button}
            onPress={enviarDados}
        >
            <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
        </View> 
    )
}

const styles = StyleSheet.create({
    blocoTudo:{
        flex:1,
        borderWidth: 1,
        alignItems:'center',
        justifyContent:"center",
        backgroundColor:"#FFFFFF"
    },
    foto1: {
     width:200,
     height:200,
     marginTop:50,
     marginBottom:10
    },
    titulo:{
        fontSize:30,
        fontWeight:"bold",
    },
    input:{
        width:330,
        height: 44,
        margin: 14,
        borderWidth: 1,
        borderColor:"#ECECEC",
        borderRadius: 5,
        padding: 10,
        textAlign:"center",
        fontSize:15,
    },
    button:{
        marginTop:40,
        width: 170,
        height: 44,
        alignItems: "center",
        borderRadius: 5,
        backgroundColor: "#88A2E7",
        padding: 10,
    },
    buttonText:{
        fontSize:16,
        color:"#FFFF",
        fontWeight:"bold"
        
    }
});