import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity,ScrollView} from 'react-native';
import BlocoDiaAgendado from './blocoAgendado';



export default function Agenda() {
    return(
        <View style={styles.blocoTudoA}>
            <Text style={styles.titulo}>Horários agendados</Text>
            <ScrollView>
            <BlocoDiaAgendado data="23" turno="Manhã" horario="08:00 ~ 12:00"/>
            <BlocoDiaAgendado data="3" turno="Tarde" horario="14:00 ~ 15:00"/>
            <BlocoDiaAgendado data="5" turno="manhã" horario="18:00 ~ 16:00"/>
            <BlocoDiaAgendado data="8" turno="Tarde" horario="18:00 ~ 16:00"/>
            <BlocoDiaAgendado data="9" turno="manhã" horario="18:00 ~ 16:00"/>
            <BlocoDiaAgendado data="12" turno="Tarde" horario="18:00 ~ 16:00"/>
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