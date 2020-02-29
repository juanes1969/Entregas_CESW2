import React from 'react';
import Header from '../Componentes/Header';
import Content from '../Componentes/Content';
//import Main from '../Componentes/Main';
import Footer from '../Componentes/Footer';
import Prices from '../Componentes/Prices'

const App = () => { //deja de ser un componente stateful no contiene {}
    // siempre se retorna un unico componente contenedor
    return ( < >
        <
        Header / >
        <
        Content / >
        <
        Prices / >
        <
        Footer / >
        <
        />
    );
}

export default App;