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
                    source={require('../../../assets/foto4.png')}>
                </Image>

                <TextInput placeholder="Email"
                    style={styles.input}
                    onChangeText={email => setEmail(email)}
                    value={email} />

                <TextInput placeholder="Senha"
                    style={styles.input}
                    secureTextEntry={true}
                    onChangeText={password => setPassword(password)}
                    value={password} />

                <TouchableOpacity style={styles.button}
                    onPress={() => { Autenticar(email, password) }}
                >

                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <View style={styles.line}> 
                    <View style={styles.line1} />
                    <View>
                        <Text style={styles.lineText}>ou</Text>
                    </View>
                    <View style={styles.line2} />
                </View>

                <TouchableOpacity style={styles.onlyText} onPress={() => Cadastro()}>
                    <Text style={styles.onlyTextText}>Cadastra-se</Text>
                </TouchableOpacity>

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    blocoTudo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: "#FFFFFF"
    },
    foto1: {
        width: 490,
        height: 450,
        left: -20,
        marginTop: 10,
    },
    input: {
        top: -20,
        width: 330,
        height: 44,
        margin: 7,
        borderWidth: 1,
        borderColor: "#ECECEC",
        borderRadius: 5,
        padding: 10,
        fontSize: 15,
    },
    button: {
        width: 330,
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

    },
    onlyText: {
        color: "#88A2E7",
        marginTop: 10,
        width: 330,
        height: 44,
        alignItems: "center",
        borderRadius: 5,
        padding: 10,
        borderWidth: 2,
        borderColor: "#88A2E7",
        borderRadius: 5,
    },
    onlyTextText: {
        color: "#88A2E7",
        fontWeight: "bold",
    },

    line: {
        flexDirection: 'row',
        width: 330,
        alignItems: 'center',
        marginTop: 10,
    },

    line1: {
        flex: 1,
        height: 1.7,
        backgroundColor: '#ECECEC',
    },

    line2: {
        flex: 1,
        height: 1.7,
        backgroundColor: '#ECECEC',  
    },

    lineText: {
        fontSize:20,
        color: '#ECECEC',
        width: 40,
        textAlign: 'center',
    },
});