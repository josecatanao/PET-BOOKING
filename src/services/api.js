import axios from 'axios';

const api = axios.create({
    //Aqui você colocar o IP que mostra quando você executa o expo start
    baseURL: 'http://192.168.0.109:3000',
})

export default api;