import react, { Component } from "react"
import ReactDOM from "react-dom"

export default class Classe extends Component {

state = {
    linguagem: "React"
};
render(){
    return(
        <div className="App">
            <h1>Olá mundo {this.state.linguagem}</h1>
            <h2>Esse é o meu componente de classe</h2>
        </div>
    )
}
}
