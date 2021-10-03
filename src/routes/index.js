import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import ProfileDetails from '../pages/profile/ProfileDetails';
import ProfileData from '../pages/profile/CreateProfile/ProfileData';
import Cadastro from '../pages/CadastroAgenda/paginaCadatroAgenda';
import Login from '../pages/Login/login';

import  Header  from '../components/Header';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {

    return (
        <NavigationContainer>
        <Navigator>
        <Screen
                name="login"
                component={Login}
                options={{
                    headerShown: false,
                    
                }}
            />
             <Screen
                name="cadastro"
                component={Cadastro}
                options={{
                    headerShown: false,
                    header: () => <Header title='teste'/>
                }}
            />
            
            <Screen
                name="ProfileData"
                component={ProfileData}
                options={{
                    headerShown: false,
                   
                }}
            />
            <Screen
                name="ProfileDetails"
                component={ProfileDetails}
                options={{
                    headerShown: true,//depois colocar true
                    header: () => <Header title='Seus dados'/>
                }}
            />
            
        </Navigator>
        </NavigationContainer>
    );
}
