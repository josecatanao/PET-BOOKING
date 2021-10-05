import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import ProfileDetails from '../pages/profile/ProfileDetails';
import ProfileData from '../pages/profile/CreateProfile/ProfileData';
import ProfileUpdate from '../pages/profile/UpdateProfile/ProfileData';
import Cadastro from '../pages/CadastroAgenda/paginaCadatroAgenda';
import Agenda from "../pages/HorariosAgendados/paginaHorariosAgendados"
import Diascadastrados from "../pages/HorariosAgendados/paginaDiascadastrados"
import Login from '../pages/Login/login';
import PagLocalizacao from '../pages/Localizacao/pagLocalizacao';

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
                    headerShown: true,
                    header: () => <Header title='Login'/>
                }}
            />
              
            <Screen
                name="Agenda"
                component={Agenda}
                options={{
                    headerShown: true,
                    header: () => <Header showImageField title='Horários agendados'/>
                }}
            />
            
            <Screen
                 name="localizacao"
                 component={PagLocalizacao}
                 options={{
                     headerShown: true,
                     header: () => <Header showBackButton showImageField title='Ver localização'/>
                 }}
            />
            
           <Screen
                name="dias cadastrados"
                component={ Diascadastrados}
                options={{
                    headerShown: true,
                    header: () => <Header showImageField title='Dias cadastrados'/>
                }}
            />

           <Screen
                name="cadastro"
                component={Cadastro}
                options={{
                    headerShown: true,
                    header: () => <Header showBackButton title='Cadastro da agenda'/>
                }}
            />
      
            <Screen
                name="ProfileData"
                component={ProfileData}
                options={{
                    headerShown: true,
                    header: () => <Header title='Cadastre-se aqui'/>
                }}
            />
             
            <Screen
                name="ProfileDetails"
                component={ProfileDetails}
                options={{
                    headerShown: true,//depois colocar true
                    header: () => <Header showBackButton title='Seus dados'/>
                }}
            />
            
            <Screen
                name="ProfileUpdate"
                component={ProfileUpdate}
                options={{
                    headerShown: true,
                    header: () => <Header showX title='Atualizar dados'/>
                }}
            />
            
        </Navigator>
        </NavigationContainer>
    );
}
