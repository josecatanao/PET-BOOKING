import React, { useEffect, useState  } from "react";

import { 
    View, 
    Text, 
    ScrollView, 
    StyleSheet, 
    Dimensions,
    Image, 
    TouchableOpacity, 
    Linking,
    RectButton,
    Alert,
} from 'react-native';

import { useRoute, useNavigation } from '@react-navigation/native';
  
export default function ProfileDetails () {

    const route = useRoute();
    const Navigation = useNavigation();
    const  id  = route.params;
    const [perfil, setPerfil] = useState();
    const [imageURI, setImageURI] = useState(null);

/* TO DO carregar o perfil logado;
    useEffect(() => {
        api.get(`usuario/${id}`).then(response => {
            setPerfil(response.data);
        });
    }, [id]);

    if (!perfil) {
        return alert("error");
        //return <AppLoading/>;
    }
*/

    function apagar(){
        Alert.alert(
            "Confimação",
            "Tem certeza que você deseja deletar sua conta?",
            [
            {
                text: "Não",
                onPress: () => {},
                style: "cancel",
            },
            {
                text: "Sim",
                onPress: () => {
                    // TO DO logica de apagar perfil;
                    Navigation.navigate("Login");
                },
                style: "cancel",
            },
            ],
            {
            cancelable: true,
            onDismiss: () => {}
            }
        );
    }

    function editar() {
        // TO DO logica de atualizar perfil;
        Navigation.navigate("ProfileUpdate");
    };

    return (
        <View style={styles.container}>
        <ScrollView>
            <View>
                <View style={styles.buttonGroup}>
                    <View style={styles.editGroup}>
                        <TouchableOpacity onPress={editar}>
                        <Image
                            style={styles.logoedit}
                            source={require('../../../assets/foto7.jpg')}
                        ></Image>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={apagar}>
                        <Image
                            style={styles.logoedit}
                            onPress={apagar}
                            source={require('../../../assets/foto6.jpg')}
                        ></Image>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.dataGroupImageField}>
                    <View style={styles.uploadedImageContainer}>
                        {/* Se possível, colocar o componente <Image/> aqui dentro com a imagem de perfil do usuário logado */}
                    </View>
                </View>
                <View style={styles.dataGroup}>
                    <Text style={styles.dataType}>Nome</Text>
                    <Text style={styles.dataValue}>valor do nome</Text>
                </View>
                <View style={styles.dataGroup}>
                    <Text style={styles.dataType}>Sobrenome</Text>
                    <Text style={styles.dataValue}>valor do sobrenome</Text>
                </View>
                <View style={styles.dataGroup}>
                    <Text style={styles.dataType}>E-mail</Text>
                    <Text style={styles.dataValue}>valor do e-mail</Text>
                </View>
            </View>
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },

    buttonGroup: {
        width: 330,
        margin: 14,
        marginBottom: 0,
        borderColor: "#ECECEC",
        borderRadius: 5,
        padding: 10,
        textAlign: "center",
        alignItems: "flex-end",
        fontSize: 15,
        flexDirection: "column",
        marginHorizontal:35
    },

    editGroup: {
        width: 70,
        height: 35,
        borderColor: "#ECECEC",
        borderRadius: 5,
        textAlign: "center",
        alignItems: "center",
        justifyContent: 'space-around',
        fontSize: 15,
        flexDirection: "row",
    },

    logoedit: {
        width:22,
        height:25,
        borderWidth:1,
    },

    dataGroup: {
        width: 330,
        height: 70,
        margin: 14,
        borderColor: "#ECECEC",
        borderRadius: 5,
        padding: 10,
        textAlign: "center",
        fontSize: 15,
        marginHorizontal:35
    },

    dataGroupImageField: {
        width: 330,
        height: 110,
        margin: 14,
        borderColor: "#ECECEC",
        borderRadius: 5,
        padding: 10,
        textAlign: "center",
        alignItems: "center",
        fontSize: 15,
        marginHorizontal:35
    },

    dataType: {
        color:"black",
        fontSize:16,
        marginTop:3,
        fontWeight:"bold"
    },

    dataValue: {
        color:"#878787",
        fontSize:14,
    },

    imagesContainer: {
        height: 240,
    },

    image: {
        width: Dimensions.get('window').width,
        height: 240,
        resizeMode: 'cover',
    },

    detailOrphanageContainer: {
        padding: 24,
    },

    title: {
        color: '#4D6F80',
        fontSize: 30,
        fontFamily: 'Nunito_700Bold',
    },

    description: {
        fontFamily: 'Nunito_600SemiBold',
        color: '#5c8599',
        lineHeight: 24,
        marginTop: 16,
    },

    mapContainer: {
        borderRadius: 20,
        overflow: 'hidden',
        borderWidth: 1.2,
        borderColor: '#B3DAE2',
        marginTop: 40,
        backgroundColor: '#E6F7FB',
    },

    mapStyle: {
        width: '100%',
        height: 150,
    },

    routesContainer: {
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#B3DAE2',
    },

    routesText: {
        fontFamily: 'Nunito_700Bold',
        color: '#0089a5'
    },

    separator: {
        height: 0.8,
        width: '100%',
        backgroundColor: '#D3E2E6',
        marginVertical: 30,
    },

    scheduleContainer: {
        marginTop: 24,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    scheduleItem: {
        width: '48%',
        padding: 20,
        borderRadius: 20,
        borderWidth: 1,
    },

    scheduleItemBlue: {
        backgroundColor: '#E6F7FB',
        borderColor: '#B3DAE2',
        
    },

    scheduleItemGreen: {
        backgroundColor: '#EDFFF6',
        borderColor: '#A1E9C5',
        
    },

    scheduleItemRed: {
        backgroundColor: '#fef6f9',
        borderColor: '#ffbcd4',
        
    },

    scheduleItemText: {
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 16,
        lineHeight: 24,
        marginTop: 20,
    },

    scheduleItemTextBlue: {
        color: '#5C8599'
    },

    scheduleItemTextGreen: {
        color: '#37C77F'
    },

    scheduleItemTextRed: {
        color: '#ff669d'
    },

    contactButton: {
        backgroundColor: '#3CDC8C',
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
        marginTop: 40,
        marginBottom:40,
    },

    contactButtonText: {
        fontFamily: 'Nunito_800ExtraBold',
        color: '#FFF',
        fontSize: 16,
        marginLeft: 16,
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
