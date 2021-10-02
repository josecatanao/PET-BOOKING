import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ProfileDetails from '../pages/profile/ProfileDetails';
import ProfileData from '../pages/profile/CreateProfile/ProfileData';

import  Header  from '../components/Header';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {

    return (
        <Navigator>
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
                    headerShown: true,
                    header: () => <Header title='Seus dados'/>
                }}
            />

        </Navigator>
    );
}
