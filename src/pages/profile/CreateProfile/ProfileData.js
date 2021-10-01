const { useState } = require("react");
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

const ProfileData = () => {
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

        const response = await api.post('usuario', data);
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
            <Text style={styles.title}>Dados</Text>

            <Text style={styles.label}>E-mail</Text>
            <TextInput 
                style={styles.input}
                value={nome}
                onChangeText={text => setEmail(text)}
            />

            <Text style={styles.label}>Nome</Text>
            <TextInput 
                style={styles.input}
                value={nome}
                onChangeText={text => setNome(text)}
            />
            
            <Text style={styles.label}>Sobrenome</Text>
            <TextInput 
                style={styles.input}
                value={nome}
                onChangeText={text => setSobrenome(text)}
            />

            <Text style={styles.label}>Senha</Text>
            <TextInput 
                style={styles.input}
                value={nome}
                onChangeText={text => setPassword(text)}
            />

            <View style={switchContainer}>
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

            <View style={uploadedImageContainer}>
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
        fontFamily: 'Nunito_700Bold',
        marginBottom: 32,
        paddingBottom: 24,
        borderBottomWidth: 0.8,
        borderBottomColor: '#D3E2E6'
    },
    label: {
        color: '#8fa7b3',
        fontFamily: 'Nunito_600SemiBold',
        marginBottom: 8,
    },
    input: {
        backgroundColor: '#fff',
        borderWidth: 1.4,
        borderColor: '#d3e2e6',
        borderRadius: 20,
        height: 56,
        paddingVertical: 18,
        paddingHorizontal: 24,
        marginBottom: 16,
        textAlignVertical: 'top',
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
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
        marginTop: 32,
        marginBottom:12
    },
    nextButtonText:{
        fontFamily: 'Nunito_800ExtraBold',
        fontSize: 16,
        color: '#FFF',
    }
});

export default ProfileData;