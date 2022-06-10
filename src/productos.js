import React, { Component } from 'react';
import './App.css';

class Producto extends Component {
//function App() {

  constructor(props) {
    super(props);
    this.state = {
      productos: [],
      recuperado: false
    }
  }

  componentWillMount() {
    fetch('http://localhost:8000/productos/')
      .then((response) => {
        return response.json()
      })
      .then((prod) => {
        this.setState({ productos: prod,
                        recuperado: true
        })
      })    
  } 

  mostrarTabla() {
    return (
      <div>
        <table border="1">
        <thead>
          <tr>
            
            <th>Descripción</th>
             
            <th>Imagen</th>                    
          </tr>
        </thead>
        <tbody>  
          {this.state.productos.map(prod => {
            return (
              <tr key={ prod.codigo}>
                <td>{ prod.descripcion}</td>
                <td>
                    <a href={"http://localhost:3000/productos/"+prod.codigo}>
                        <img src={ prod.imagen} width="150px" height="150px"></img>
                    </a>
                </td>
              </tr>
            );
          })}
        </tbody>
        </table>
      </div>
    );
  }

  render() {
    if (this.state.recuperado)
      return this.mostrarTabla()
    else
      return (<div>recuperando datos...</div>)
  }


}

export default Producto;