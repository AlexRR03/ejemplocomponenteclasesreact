import { Component } from "react";

class HijoNumero extends Component{
    obtenerNumero = ()=>{
        let numeroQueSeSuma = this.props.numero
        this.props.sumarNumero(numeroQueSeSuma)
    }
    render(){
        return(
            <div style={{backgroundColor:"silver",display:"flex", alignItems:"center",justifyContent:"center",width:"300px",height:"100px",}}>
                <h3> Numero: {this.props.numero}</h3>
                <button onClick={this.obtenerNumero} >+{this.props.numero}</button>
            </div>
        )
    }
}
export default HijoNumero;
