import { Component } from 'react'

class DibujoComplejosReact extends Component {

    state ={
        nombres :["Paula","Eva","Lucia","Raul","Daniel","Fernando","David","Alfonso","Maria","Marta"]
    }
    
    generarNombre =()=>{
        this.state.nombres.push("Alejandro")
        this.state.nombres.push("Isaac")
        //Actualizar state
        this.setState({
            nombres:this.state.nombres
        })
    }
  render() {
    return (
        <div>
            <h1>Dibujos Complejos React</h1>
            <button onClick={this.generarNombre}>Generar Nombre</button>
        {
            //CODIGO REACT ES DIFERENTE AL CODIGO JS
            //CODIGO LOGICO CON SINTAXIS JSX
            //EL CODIGO LOGICO DEBE CONTENER UN RETURN
            this.state.nombres.map((nombre,i)=>{
                //ESTE CODIGO NUNCA DEBE ESRTAR VACIO
                //SIEMPRE DEVULVE UN RETURN
                return(<h1 key={i} style={{color:"blueviolet"}}>{i+1}.- {nombre}</h1>)
            })

            
        }
        </div>
        

        
    )
  }
}

export default DibujoComplejosReact;
