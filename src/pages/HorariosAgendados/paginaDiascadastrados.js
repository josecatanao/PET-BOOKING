import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity,ScrollView} from 'react-native';
import BlocoDiaAgendadoEdit from './blocoAgendadoEdit';



export default function Diascadastrados() {
    return(
        <View style={styles.blocoTudoA}>
            <Text style={styles.titulo}>Dias cadastrados</Text>
            <ScrollView>
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
      alignItems:"center"
    },
})