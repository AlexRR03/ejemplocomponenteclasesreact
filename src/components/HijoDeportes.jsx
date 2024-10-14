import  { Component } from 'react'

class HijoDeportes extends Component { 
  seleccionarFav =()=>{
    //CAPTURAMOS EL DEPORTE SELECCIONADO EN props
    let deporteFav = this.props.nombre
    //RELIZAR LLAMADA AL PADRE ENVIANDO EL NOMBRE 
    this.props.mostrarFav(deporteFav);
  }
  render() {
    return (
      <div>
        <h2 style={{color:"silver"}}>{this.props.nombre}</h2>
        <button onClick={this.seleccionarFav}>Favorito</button>
      </div>
    )
  }
}
export default HijoDeportes;
