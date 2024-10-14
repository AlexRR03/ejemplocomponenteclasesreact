import { Component } from 'react'
 class DibujosComplejos extends Component {

    //DIBUJAR NUMERO EN FORMATO HTML
    //UTILIZANDO UN ARRAY CON <li>
    dibujarNumeros=()=>{
        //Declara el array  
        let lista = [];
        //REALIZAR UN BUCLE PARA RELLENAR
        for (let i = 0; i <=7; i++) {
            let numero = parseInt(Math.random()*1000)+1;
            lista.push(<li key={i}>{numero}</li>);
            
        }
        return lista;
    }

  render() {
    return (
      <div>
        <h1>Dibujos Complejos HTML</h1>
        <ul>
            {this.dibujarNumeros()}
        </ul>
      </div>
    )
  }
}

export default DibujosComplejos