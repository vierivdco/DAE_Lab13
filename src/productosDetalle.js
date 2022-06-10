import React, { Component } from 'react';
import './App.css';



class ProductoDetalle extends Component {
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
            <th>Código</th>
            <th>Descripción</th>
            <th>Precio</th>  
            <th>Imagen</th>                    
          </tr>
        </thead>
        <tbody>  
          {this.state.productos.map(prod => {
            return (
              <tr key={ prod.codigo}>
                <td>{ prod.codigo}</td>
                <td>{ prod.descripcion}</td>
                <td>{ prod.precio}</td>
                <td>
                        <img src={ prod.imagen} width="150px" height="150px"></img>
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

export default ProductoDetalle;