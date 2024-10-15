import { Component } from "react";
import HijoNumero from "./HijoNumero";
class PadreNumeros extends Component{
    state ={
        listaNum : [5,9,7,12],
        numero:0
    }
    
    insertarNumAleatorio =()=>{
        let numAleatorio = parseInt(Math.random()*50)+1;
        this.state.listaNum.push(numAleatorio)
        this.setState({
            listaNum : this.state.listaNum
        })
    }
    reiniciarNumero = ()=>{
        this.setState({
            numero:0
        })
    }
    sumarNumero = (numeroQueSeSuma)=>{
        console.log(numeroQueSeSuma)
        console.log(this.state.numero)
        this.setState({
            numero : this.state.numero += numeroQueSeSuma
        })
    }
    render(){
        return(
            <div>
                <h1 style={{color:"red"}}>Sumar numeros</h1>
                <button onClick={this.insertarNumAleatorio}>Generar numero aleatorio</button>
                <button onClick={this.reiniciarNumero}>Reiniciar Contador</button>
                <h1>{this.state.numero}</h1>
                <div>
                    {
                       this.state.listaNum.map((numero,index)=>{
                            return(<HijoNumero key={index} numero={numero} sumarNumero={this.sumarNumero}></HijoNumero>)
                       })
                    }
                </div>
            </div>
        )
    }
}
export default PadreNumeros;