import { Component } from "react";

//SE PUEDEN DECLARA METODOS FUERA DE LA CLASE
//ESTOS METODOS NO PUEDEN UTILIZAR NADA DEL Component
//SE DECLARAN CON FUNCION

function metodoExterno(){
    console.log("metodo externo")
}
class Contador extends Component {
    numero = 1;

    //LOS METODOS SE DELARAN AQUI

    incrementarNumero =()=>{
        this.numero ++
        console.log("Valor del numero: " + this.numero)
    }

    //VARIABLE DE ESTADO
    //TENDRA VALOR DE PROPS

    state = {
        valor: parseInt(this.props.inicio),

    }
    //METODO PARA CAMBIAR EL VALOR DEL STATE
    incrementarValorState = ()=>{
        //PARA MODIFICAR VALORES DENTRO DEL STATE
        //UTILIZAR SETSTATE CON UN JSON DEL OBJETO CON SUS VARIABLES
        //LAS QUE NO SE MENCIONAN NO SE MODIFICAN
        this.setState({
            valor: this.state.valor +1
        })
    }

    render(){
        return(
            <div>
                <h1>Class Component Contador</h1>
                <h2 style={{color:"blue"}}>Inicio del contador: {this.props.inicio}</h2>
                <h2 style={{color:"red"}}>Valor del state: {this.state.valor}</h2>
                {/** >La llamada a lños metodos es mas sencillo al no usar expresiones lamda */}
                <button onClick={this.incrementarValorState}>Incrementar state</button>
                <button onClick={()=>{
                    //AL LLAMAR A UN METODO DE LA CLASE, SE UTILIZA 
                    //LA PALABRA THIS
                    this.incrementarNumero();
                    metodoExterno()
                    //NO UTILIZAMOS EL THIS PARA METODOS EXTERNOS

                }}>Incrementar numero</button>
            </div>
        )
    }

}



export default Contador;