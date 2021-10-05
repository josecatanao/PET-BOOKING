import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
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
             >
                 <Callout tooltip>
                     <View style={styles.calloutContainer}>
                         <Text style={styles.calloutText}>Clinvet</Text>
                         <Text style={styles. calloutTextDescription}>Clínica veterinária</Text>
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
        borderRadius:6,
        justifyContent:'center',
      },
      calloutText:{
        fontSize:16,
        marginBottom: 5,
        fontFamily:'Nunito_700Bold'
      },
      calloutTextDescription:{
        fontSize:16,
        marginBottom: 5,
        color: '#007a87',
      }
  });

