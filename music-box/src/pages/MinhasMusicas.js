import React from 'react';
import CardMusica from '../components/CardMusica';
import NavBar from "../components/NavBar";


function MinhasMusicas() {
    return (
        <>
            <NavBar />

            <div className="container">
                <div className="filter">
                    <button className="btn-green right">Adicionar</button>
                </div>
            </div>
            <div className="container">
                <div className="music-boxes">

                    <CardMusica 
                    nome="Cry for me"
                    genero="Kpop"
                    ano="2020"
                    />

                    <CardMusica 
                    nome="Signal"
                    genero="Kpop"
                    ano="2017"
                    />
                    
                    <CardMusica 
                    nome="Bop to the top"
                    genero="Musical"
                    ano="2006"
                    />

                </div>
            </div>
        </>
    );
}



export default MinhasMusicas;