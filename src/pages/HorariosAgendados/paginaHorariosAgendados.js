import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';

import { RectButton } from 'react-native-gesture-handler';

import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import api from '../../services/api'


export default function Agenda() {
    const Navigation = useNavigation();
    const [agenda, setAgenda] = useState([]);
    const [load, setLoad] = useState(true)
    const navigation = useNavigation();


    async function listAgenda() {

        const token = await AsyncStorage.getItem("Auth:Token");
       const response =  await api.get('/agenda', { headers: { "Authorization": `Bearer ${token}` } })
       setAgenda(response) 
       console.log(agenda)
    }

    function handleAddHorario() {
        navigation.navigate("cadastro");
    }

    function handleLocate() {
        navigation.navigate("localizacao");
    }


    useEffect(() => {
        listAgenda();
        Navigation.addListener('focus', () => setLoad(!load))

    }, [load, Navigation]);

    return (
          <View style={styles.blocoTudoA}>

            <View style={styles.adicionar}>
                <RectButton style={styles.adicionarButton} onPress={handleAddHorario}>
                <Text>+ Novo</Text>
                </RectButton>
            </View>
            <FlatList

                data={agenda.data}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => String(item._id)}
                renderItem={({ item }) => (

                            
                        <View style={styles.blocoAg}>
                            <View style={styles.blocoData}>
                                <Text style={styles.label}>Data:</Text>
                                <Text style={styles.textoData}>{item.data}</Text>
                            </View>
                            <View style={styles.blocoHorario}>
                                <Text style={styles.label}>Tipo atendimento:</Text>
                                <Text style={styles.texto}>{item.tipoAtendimento}</Text>
                                <Text style={styles.label}>Descriação:</Text>
                                <Text style={styles.texto}>{item.descricao}</Text>
                            </View>
                        </View>
                        

                
                )} />
                <View style={styles.localizar}>
                    <RectButton style={styles.localizarButton} onPress={handleLocate}>
                    <Text>Localizar clínica</Text>
                    </RectButton>
                </View>

        </View>

    )
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 60
    },
    blocoTudoA: {
        flex: 1,
        alignItems: "center",
        
    },
    blocoAg:{
        flexDirection: "row",
        justifyContent:"space-evenly",
        width:350,
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
    adicionar: {
        flexDirection: "row",
        justifyContent:"space-evenly",
        alignItems: 'center',
        width:320,
        backgroundColor:"white",
        height:90,
        margin:15,
        borderWidth:2,
        borderColor:"#C8FDDA",
        borderRadius:5,
    },
    adicionarButton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width:320,
        height:90,
    },
    localizar: {
        position: 'absolute',
        bottom: 18,
        right: 13,
    },
    localizarButton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 20,
        alignItems: 'center',
        width:180,
        height:50,
        padding: 10,
    }

})