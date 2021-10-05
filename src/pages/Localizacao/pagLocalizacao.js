import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import { Feather } from '@expo/vector-icons';
import MapView, {Marker, Callout, PROVIDER_GOOGLE} from 'react-native-maps';

import mapMarker from '../../../assets/mapMarker.png';



export default function PagLocalizacao() {
    return (
       <View style={styles.container}>
           <MapView 
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
                latitude: -6.8796777,
                longitude: -38.564648614,
                latitudeDelta: 0.00922,
                longitudeDelta: 0.00421,
              }}
            > 
             <Marker
                icon={mapMarker}
                coordinate= {{
                    latitude: -6.8796777,
                    longitude: -38.564648614,
                }}
                calloutAnchor={{
                    x:2.7,
                    y:0.8
                }}
             >
                 <Callout
                    tooltip= {true}
                    onPress={() => {}}
                 >
                     <View style={styles.calloutContanier}>
                         <Text style={styles.calloutText}>
                            Clinica Veterinária
                         </Text>
                     </View>
                 </Callout>
             </Marker>   
           </MapView>
       </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
    calloutContainer:{
        width:168,
        height:46,
        paddingHorizontal:16,
        backgroundColor:'rgba(255,255,255,0.8)',
        borderRadius:16,
        justifyContent:'center',
      },
      calloutText:{
        color:'#8889a5',
        fontSize:14,
        fontFamily:'Nunito_700Bold'
      }
  });

export default PagLocalizacao;

