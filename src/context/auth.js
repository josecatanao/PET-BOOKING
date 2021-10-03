import React, {createContext, useContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'
import api from "../services/api";


const AuthContext = createContext({});

export default function AuthContextComponent({children}){
    const [user, setUser] = useState(null);
  

    useEffect(() => {
        const loadStorage = async () => {
            const userStorage = await AsyncStorage.getItem("Auth:User");
            const tokenStorage = await AsyncStorage.getItem("Auth:Token");
            if(userStorage && tokenStorage) {
                api.defaults.headers.Authorization = "Bearer" + tokenStorage;
                console.log(userStorage);
                setUser(JSON.stringify(userStorage));
            }
        }
        loadStorage().then();
    },[]);

    async function login(email, password) {
        const response = await api.post('/usuario/authenticate', {email, password});
        const {token, user} = response.data;
        api.defaults.headers.common.Authorization = `Bearer ${token}`;
        await AsyncStorage.setItem('Auth:User', JSON.stringify(user));
        await AsyncStorage.setItem('Auth:Token', token);
        setUser(user);
        console.log(user)
       

    }
    async function logout () {
        AsyncStorage.clear().then(() =>{
            setUser(null)
        });
    }

    return(
        <AuthContext.Provider value={{signed: !!user, user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )

}

export function useAuth(){
  return useContext(AuthContext);
}
