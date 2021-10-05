import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import api from '../../services/api' 

export default function Cadastro() {
    const Navigation = useNavigation();

    const [data, setData] = useState('')
    const [tipoAtendimento, setTipoatendimento] = useState('')
    const [descricao, setDescricao] = useState('')


    async function cadastrarHorario() {
        try {
            const horario = {
                data,
                tipoAtendimento,
                descricao
            }
            const token = await AsyncStorage.getItem("Auth:Token");
            await api.post('/agenda', horario,
             {headers: {"Authorization": `Bearer ${token}`}})
             Alert.alert("mensagem", "Cadastrado na agenda com sucesso")
             
        }catch(error){
            console.log(error.response);
            alert(error);
            Alert.alert('ERRO','erro ao cadastrar');
             
        }
    }
    function verHorario(){
        Navigation.navigate("Agenda")
    }
    return(
        <View  style={styles.blocoTudo}> 
            <Image
                 style={styles.foto1}
                 source={require('../../../assets/foto1.jpg')}
            ></Image>

            <TextInput
           style={styles.input}
            placeholder="Digite a Data Ex: 10-10-2021"
            onChangeText={data => setData(data)}
            value={data}
         />
         <TextInput
           style={styles.input}
            placeholder="Tipo de Atendimento"
            onChangeText={tipoAtendimento => setTipoatendimento(tipoAtendimento)}
            value={tipoAtendimento}
         />
         <TextInput
           style={styles.input}
            placeholder="Descrição"
            onChangeText={descricao => setDescricao(descricao)}
            value={descricao}
         />

        <TouchableOpacity
            style={styles.button}
            onPress={cadastrarHorario}>
        
            <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        {/*
        <TouchableOpacity
            style={styles.button}
            onPress={verHorario}>
        
            <Text style={styles.buttonText}>Ver Agenda</Text>
        </TouchableOpacity>
        */}
        </View> 

        
    )
}



const styles = StyleSheet.create({
    blocoTudo:{
        flex:1,
        alignItems:'center',
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