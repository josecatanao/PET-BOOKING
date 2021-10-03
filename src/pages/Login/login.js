import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useAuth } from '../../context/auth';
import { useNavigation } from '@react-navigation/native'

import api from '../../services/api';

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Navigation = useNavigation();
    const { login, signed, user } = useAuth();


    useEffect(() => {
        setEmail("");
        setPassword("");
    }, []);

    function Autenticar(email, password) {

        login(email, password).then().catch(error => (Alert.alert("ERROR", "Email ou senha incorreto")));

    }

    useEffect(() => {
        if (signed) Navigation.navigate("cadastro");
    }, [signed, user]);

    function Cadastro() {
        Navigation.navigate("ProfileData");
    };



    return (
        <>
            <View style={styles.blocoTudo}>

                <Image
                    style={styles.foto1}
                    source={require('../../../assets/foto4.jpg')}
                ></Image>

                <TextInput placeholder="Digite Seu E-mail"
                    style={styles.input}
                    onChangeText={email => setEmail(email)}
                    value={email} />

                <TextInput placeholder="Digite sua Senha"
                    style={styles.input}
                    secureTextEntry={true}
                    onChangeText={password => setPassword(password)}
                    value={password} />

                <TouchableOpacity style={styles.button}
                    onPress={() => { Autenticar(email, password) }}
                >

                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Cadastro()}>
                    <Text>Cadastra-se</Text>
                </TouchableOpacity>

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    blocoTudo: {
        flex: 1,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: "#FFFFFF"
    },
    foto1: {
        width: 200,
        height: 200,
        marginTop: 50,
        marginBottom: 10
    },
    input: {
        width: 330,
        height: 44,
        margin: 14,
        borderWidth: 1,
        borderColor: "#ECECEC",
        borderRadius: 5,
        padding: 10,
        textAlign: "center",
        fontSize: 15,
    },
    button: {
        marginTop: 40,
        width: 170,
        height: 44,
        alignItems: "center",
        borderRadius: 5,
        backgroundColor: "#88A2E7",
        padding: 10,
    },
    buttonText: {
        fontSize: 16,
        color: "#FFFF",
        fontWeight: "bold"

    }
});