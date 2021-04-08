var container = document.getElementById("app")

// titulo = document.createElement("h1")
//titulo.innerHTML = "Título inserido por JavaScripto :O \\o/"
//container.appendChild(titulo)
function Contador(props){
    
    //let numero = 0;
    const [numero, setNumero] = React.useState(0);

    function somar(){
        setNumero(numero + 1)
        console.log("Mais um voto. Total de votos=" + numero)
    }

    function subtrair(){
        setNumero(numero - 1)
        console.log("Menos um voto. Total de votos=" + numero)
    }


    return(
        <React.Fragment>
        <h1>{props.titulo}</h1>
        <h2>{numero}</h2>
        <button onClick={somar}>+</button>
        <button onClick={subtrair}>-</button>
        </React.Fragment>
    );
}

function App(){
    return (
        <React.Fragment>
        <img height="200px" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rengar_0.jpg"></img>
        <Contador titulo="Rengar"/>
        <br></br><br></br><br></br>
        <img height="200px" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Viego_0.jpg"></img>
        <Contador titulo="Viego"/>
        </React.Fragment>
    );
}

ReactDOM.render(React.createElement(App, null, null), container);

// PascalCase -> Componentes em React seguem esse padrão
// camelCase -> Funções em JavaScript
// Componentes só podem retornar um elemento por Componente
// saída -> aninhar em React.Fragment