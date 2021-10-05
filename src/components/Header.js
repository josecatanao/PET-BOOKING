import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, Alert, Image } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

const Header = ({title, showImageField=false, showBackButton=false, showX=false}) => {
    const navigation = useNavigation();
    const [imageURI, setImageURI] = useState(null);
    const [data, setData] = useState(null);
    /*
    // Pegando o perfil logado
    const route = useRoute();
    const  id  = route.params;
    const [perfil, setPerfil] = useState();

    useEffect(() => {
        api.get(`usuario/${id}`).then(response => {
            setPerfil(response.data);
        });
    }, [id]);

    if (!perfil) {
        alert("Erro ao carregar o perfil logado");
        //return <AppLoading/>;
    }
*/
    function handleGoToAppHomepage() {
        navigation.navigate('Agenda');
    }

    function handleGoToUserDetails() {
        navigation.navigate('ProfileDetails');
    }

    return (
        <View style={styles.container}>
            <View style={styles.navigation}>
                {
                    showBackButton ? (
                        <BorderlessButton onPress={navigation.goBack}>
                            <Feather name="arrow-left" size={36} color="#3D70FF"/>
                        </BorderlessButton>
                    ) : (
                        <View/>
                    )
                }
                <View style={{flexDirection: 'row', alignItems: 'center', marginRight: 20}}>
                    {
                        showImageField ? (
                            <View style={styles.uploadedImageContainer}>
                                <RectButton style={styles.uploadedImageContainer} onPress={handleGoToUserDetails}>
                                    <Image
                                        key={imageURI}
                                        source={{uri:imageURI}}
                                        style={styles.uploadedImage}
                                    />
                                </RectButton>
                            </View>
                
                        ) : (
                            <View/>
                        )
                    }
                    {
                        showX ? (
                            <BorderlessButton onPress={navigation.goBack}>
                                <Feather name="x" size={36} color="#3D70FF"/>
                            </BorderlessButton>
                        ) : (
                            <View/>
                        )
                    }
                </View>
            </View>

            <Text style={styles.title}>{title}</Text>
        
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 50,
        flexDirection: 'column',
        backgroundColor:"#FFFFFF",
    },
    navigation: {
        backgroundColor: "#fff",
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        //fontFamily: 'Nunito_600SemiBold',
        color: '#000',
        fontSize:30,
        fontWeight:"bold",
        marginTop:70,
        backgroundColor: '#fff',
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
    },
    uploadedImage:{
        width:64,
        height:64,
        borderRadius:20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Header;