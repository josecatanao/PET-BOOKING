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
import AsyncStorage from '@react-native-async-storage/async-storage'
import mime from 'mime'
import FormData from 'form-data';

import {Feather} from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native'


export default function ProfileData() {

    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [password, setPassword] = useState('');
    const [tipoUsuario, setTipoUsuario] = useState('final');
    
    const Navigation = useNavigation();
    
    const [imageURI, setImageURI] = useState(null);
    const [data, setData] = useState(null);

    

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
        setData(result)
    }
 
    async function handleUpdateProfile() {
        try {
          
          const token = await AsyncStorage.getItem("Auth:Token");
          const requestConfigFile = {
            headers: {
            Authorization: `bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "multipart/form-data"
          
            }
          };
    
          const dataFile = new FormData();
          const fileURL = data.uri;
          const  id  = route.params;
          const newImageUri =  "file:///" + fileURL.toString().split("file:/").join("");
    
    
          dataFile.append("file", {
            uri:  newImageUri, // Caminho da imagem
            name: newImageUri.split("/").pop(),
            type: mime.getType(data.uri),
          });
          dataFile.append("email", email);
          
          dataFile.append('nome', nome);
          dataFile.append('sobrenome', sobrenome);
          dataFile.append('password', password);
          dataFile.append('tipoUsuario', tipoUsuario);
          
    
    
    
          const response = await api.put(`usuario/${id}`, dataFile, requestConfigFile);
          console.log(response);  
          Alert.alert('Mensagem',"Edição concluida !")
         
          if(response.data){
              navigation.navigate('ProfileDetails');
          }else{
              Alert.alert('Error: não foi possível editar os dados');
          }
          
         
        } catch (err) {
          console.log(err.response);
          Alert.alert('ERRO','erro ao cadastrar');
            alert(err);
            
        }
    }
    

    return (
        <View style={styles.container}>
        <ScrollView>

            <View style={styles.uploadedImageContainer}>
                <RectButton style={styles.uploadedImageContainer} onPress={handleSelectImage}>
                    <Image
                        key={imageURI}
                        source={{uri:imageURI}}
                        style={styles.uploadedImage}
                    />
                </RectButton>
                <RectButton style={styles.imagesInput} onPress={handleSelectImage}>
                    <Feather name="plus" size={24} color="#15B6D6"/>
                </RectButton>    
            </View>

            <TextInput 
                placeholder="Digite Seu E-mail"
                style={styles.input}
                onChangeText={email => setEmail(email)}
                value={email}

               
            />

            <TextInput 
            placeholder="Nome"
                style={styles.input}
                onChangeText={nome => setNome(nome)}
                value={nome}
            />
            
            
            <TextInput 
                placeholder="Sobrenome"
                style={styles.input}
                onChangeText={sobrenome => setSobrenome(sobrenome)}
                value={sobrenome}
            />

        
            <TextInput 
                placeholder="Senha"
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

            <RectButton style={styles.nextButton} onPress={handleUpdateProfile}>
                <Text style={styles.nextButtonText}>Atualizar</Text>
            </RectButton>

        </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: "#FFFFFF"
    
    },
    title:{
        color: '#88A2E7',
        fontSize: 24,
        fontWeight:'bold',
        marginTop:80,
        paddingBottom: 30,
        marginHorizontal:100,
      
    },
    label: {
        color: '#8fa7b3',
        marginHorizontal:25,
        marginBottom: 8,
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
        marginHorizontal:35
    },
    imagesInput: {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderStyle: 'dashed',
        borderColor: '#96D2F0',
        borderWidth: 1.4,
        borderRadius: 20,
        position:'absolute',
        left:40,
        bottom:40,
    },
    uploadedImageContainer:{
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderStyle: 'dashed',
        borderColor: '#96D2F0',
        borderWidth: 1.4,
        borderRadius: 20,
        width:64,
        height:64,
        margin:5,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center',
    },
    uploadedImage:{
        width:64,
        height:64,
        borderRadius:20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 16,
    },
    nextButton: {
        backgroundColor: "#88A2E7",
        justifyContent: 'center',
        alignItems: 'center',
        height: 55,
        width:'85%',
        marginHorizontal:25,
        marginTop:20,

    },
    nextButtonText:{
        fontWeight:'bold',
        fontSize: 16,
        color: '#FFF',
    }
});

