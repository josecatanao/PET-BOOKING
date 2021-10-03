import React from 'react';
import Routes from './src/routes';
import AuthContextComponent from './src/context/auth';


export default function App(){
  return(
   <AuthContextComponent>
      <Routes />
    </AuthContextComponent>
   
  );
}
