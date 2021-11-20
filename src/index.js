//1)Necesitamos a React
import React from 'react';
//2)Necesitamos a ReactDOM
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./estilos.css"

//3)Necesitamos un componente para mostrar
import App from './App';

//4)Necesitamos mostrar el componente
ReactDOM.render( <App/> ,document.getElementById('root'));