import React, { useState } from 'react';

import {
    ScrollView,
    Text,
    TextInput, 
    TouchableOpacity, 
    View, 
    Switch, 
    StyleSheet,
    Image,
    Alert
} from 'react-native';
import api from '../../../services/api';
import * as ImagePicker from 'expo-image-picker';
import { RectButton } from 'react-native-gesture-handler';


export default function ProfileData() {

    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [password, setPassword] = useState('');
    const [tipoUsuario, setTipoUsuario] = useState('final');
    const [imageURI, setImageURI] = useState('');

    async function handleCreateProfile() {
        const data = new FormData();

        data.append('email', email);
        data.append('nome', nome);
        data.append('sobrenome', sobrenome);
        data.append('password', password);
        data.append('tipoUsuario', tipoUsuario);
        data.append('imagem', {
            name: 'imagem.jpg',
            type: 'image/jpeg',
            uri: imageURI
        });

        const response = await api.post('/usuario', data);
        if (response.data) {
            navigation.navigate('profileDetail');
        } else {
            Alert.alert('Não possível efetuar o cadastro. Se eu fosse vc verificaria o caps lock.');
        }
    }

    async function handleSelectImage() {

        const {status} = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
            alert('Eita! Precisamos de acesso às suas fotos.');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
        });
        if (result.cancelled) {
            alert('Upload cancelado.');
            return;
        }

        const {uri} = result;
        setImageURI(uri);
    }

    return (
        <ScrollView>
            <Text style={styles.title}>Cadastre-se Aqui</Text>

            <Text style={styles.label}>E-mail</Text>
            <TextInput 
                style={styles.input}
                onChangeText={email => setEmail(email)}
                value={email}

               
            />

            <Text style={styles.label}>Nome</Text>
            <TextInput 
                style={styles.input}
                onChangeText={nome => setNome(nome)}
                value={nome}
            />
            
            <Text style={styles.label}>Sobrenome</Text>
            <TextInput 
                style={styles.input}
                onChangeText={sobrenome => setSobrenome(sobrenome)}
                value={sobrenome}
            />

            <Text style={styles.label}>Senha</Text>
            <TextInput 
                style={styles.input}
                onChangeText={password => setPassword(password)}
                value={password}
            />

            <View style={ styles.switchContainer}>
                <Text style={styles.label}>É admin? (Deixe desativado por padrão.)</Text>
                <Switch
                    thumbColor="#fff"
                    trackColor={{
                        false: '#ccc',
                        true: '#39cc83',
                    }}
                    value={
                        tipoUsuario === 'admin' ? true : false
                    }
                    onValueChange={
                        value => {
                            value === true ? setTipoUsuario('admin') : setTipoUsuario('final')
                        }
                    }
                />
            </View>

            <View style={styles.uploadedImageContainer}>
                <Image
                    key={imageURI}
                    source={{uri:imageURI}}
                    style={styles.uploadedImage}
                />
            </View>

            <RectButton style={styles.nextButton} onPress={handleCreateProfile}>
                <Text style={styles.nextButtonText}>Finalizar Cadastro</Text>
            </RectButton>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal:12,
        
    },
    title:{
        color: '#5c8599',
        fontSize: 24,
        fontWeight:'bold',
        marginTop:100,
        paddingBottom: 30,
        marginHorizontal:100,
        borderBottomWidth: 0.8,
        borderBottomColor: '#D3E2E6'
    },
    label: {
        color: '#8fa7b3',
        marginHorizontal:25,
        marginBottom: 8,
    },
    input: {
        backgroundColor: '#fff',
        borderWidth: 1.4,
        borderColor: '#d3e2e6',
        borderRadius: 10,
        width:'85%',
        height: 50,
        paddingVertical: 18,
        paddingHorizontal: 24,
        marginBottom: 16,
        textAlignVertical: 'top',
        marginHorizontal:25
    },
    imagesInput: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderStyle: 'dashed',
        borderColor: '#96D2F0',
        borderWidth: 1.4,
        borderRadius: 20,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 32,
    },
    uploadedImageContainer:{
        flexDirection:'row',
    },
    uploadedImage:{
        width:64,
        height:64,
        borderRadius:20,
        marginBottom:32,
        marginRight:8
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 16,
    },
    nextButton: {
        backgroundColor: '#15c3d6',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 55,
        width:'85%',
        marginHorizontal:25

    },
    nextButtonText:{
        fontWeight:'bold',
        fontSize: 16,
        color: '#FFF',
    }
});

