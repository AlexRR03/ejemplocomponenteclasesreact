import { Component } from "react";
import HijoDeportes from "./HijoDeportes"
class PadreDeportes extends Component{
    deportes = ["Futbol","Baloncesto","Tenis","Voleibol","Padel","Natacion","Maraton"]
    //MATEDO PARA DIBUJAR EL DEPORTE HIJO FAVORITO
    //RECIBIREMOS EL DEPORTE FAVORITO EN EL METODO
    mostrarFav = (deporteSeleccionado)=>{
        this.setState({
            favorito:deporteSeleccionado
        })
    }
    //CREAR VARIABLE state PARA MOSTRAR EL DEPORTE SELECCIONADO
    state={
        favorito:""
    }
    render(){
        return(
            <div>
                <h1 style={{color:"red"}}>Padre deportes</h1>
                <h4 style={{backgroundColor:"yellow"}}>
                    Su deporte favorito es: {this.state.favorito}
                </h4>
                {
                    this.deportes.map((deporte,i)=>{
                        return(<HijoDeportes key={i} nombre={deporte} mostrarFav={this.mostrarFav}/>)
                    })
                }
            </div>
        )
    }
}
export default PadreDeportes;