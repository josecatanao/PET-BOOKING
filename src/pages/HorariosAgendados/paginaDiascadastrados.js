import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity,ScrollView} from 'react-native';
import BlocoDiaAgendadoEdit from './blocoAgendadoEdit';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';



export default function Diascadastrados() {
    const navigation = useNavigation();

    function handleAddHorario() {
        // TO DO logica adicionar horarios
        navigation.navigate("cadastro");
    }

    return(
        <View style={styles.blocoTudoA}>
            <ScrollView>
            <View style={styles.adicionar}>
                <RectButton style={styles.adicionarButton} onPress={handleAddHorario}>
                <Text>+ Novo</Text>
                </RectButton>
            </View>
            <BlocoDiaAgendadoEdit data="10-11-2021" turno="Banho e Tosa" horario="Preciso dar um banho no meu cachorro lulu ele estar podre"/>
            <BlocoDiaAgendadoEdit data="10-11-2021" turno="Banho e Tosa" horario="Preciso dar um banho no meu cachorro lulu ele estar podre"/>
            <BlocoDiaAgendadoEdit data="10-11-2021" turno="Banho e Tosa" horario="Preciso dar um banho no meu cachorro lulu ele estar podre"/>
            <BlocoDiaAgendadoEdit data="10-11-2021" turno="Banho e Tosa" horario="Preciso dar um banho no meu cachorro lulu ele estar podre"/>
            <BlocoDiaAgendadoEdit data="10-11-2021" turno="Banho e Tosa" horario="Preciso dar um banho no meu cachorro lulu ele estar podre"/>
            <BlocoDiaAgendadoEdit data="01-11-2021" turno="Banho e Tosa" horario="Preciso dar um banho no meu cachorro lulu ele estar podre Preciso dar um banho no meu"/>
            </ScrollView>
        </View>        
    )
}

const styles = StyleSheet.create({
    titulo:{
        fontSize:30,
        fontWeight:"bold",
        marginTop:60
    },
    blocoTudoA:{
      flex:1,
      alignItems:"center",
      backgroundColor: '#FFFFFF',
      paddingBottom: 80,
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
        borderColor:"#BDBDBD",
        borderRadius:5,
    },
    adicionarButton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width:320,
        height:90,
    }
})