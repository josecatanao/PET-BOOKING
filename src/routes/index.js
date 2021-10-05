import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import ProfileDetails from '../pages/profile/ProfileDetails';
import ProfileData from '../pages/profile/CreateProfile/ProfileData';
import Cadastro from '../pages/CadastroAgenda/paginaCadatroAgenda';
import Agenda from "../pages/HorariosAgendados/paginaHorariosAgendados"
import Diascadastrados from "../pages/HorariosAgendados/paginaDiascadastrados"
import Login from '../pages/Login/login';

import  Header  from '../components/Header';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {

    return (
        <NavigationContainer>
        <Navigator>
       
        <Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false,

                }}
            />

           
            <Screen
                name="dias cadastrados"
                component={ Diascadastrados}
                options={{
                    headerShown: false,
                    header: () => <Header title='dias cadastrados'/>
                }}
            />

            <Screen
                name="Agenda"
                component={Agenda}
                options={{
                    headerShown: false,
                   
                }}
            />
           
          <Screen
                name="cadastro"
                component={Cadastro}
                options={{
                    headerShown: false,
                    header: () => <Header title='Cadastro'/>
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
