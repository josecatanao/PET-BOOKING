import React, { useEffect, useState  } from "react";

import { 
    View, 
    Text, 
    ScrollView, 
    StyleSheet, 
    Dimensions,
    Image, 
    TouchableOpacity, 
    Linking
} from 'react-native';

import { useRoute } from '@react-navigation/native';
  
export default function ProfileDetails () {

    const route = useRoute();
    const  id  = route.params;
    const [perfil, setPerfil] = useState();

    useEffect(() => {
        api.get(`usuario/${id}`).then(response => {
            setPerfil(response.data);
        });
    }, [id]);

    if (!perfil) {
        return alert("error");
        //return <AppLoading/>;
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.imagesContainer}>
                <Image
                    key={image.id}
                    source={{uri:image.url}}
                    style={styles.image}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal:12
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
    }
});
