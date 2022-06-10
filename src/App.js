import logo from './logo.svg';
import React from 'react'
import './App.css';
import Users from './users'
import Contact from './contact'
import Home from './home'
import Notfound from './notfound';
import Producto from './productos';
import ProductoDetalle from './productosDetalle';

import { BrowserRouter as Router,Link, Route, Routes} from 'react-router-dom'


class App extends React.Component {
  render() {
    return (
      <div>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/usuarios">Users</Link>
            </li>
            <li>
              <Link to="/contacto">Contact</Link>
            </li>
            <li>
              <Link to="/productos">Productos</Link>
            </li>
          </ul>

          <Routes>
            
              <Route path="/" element={<Home/>} />
              <Route path="/productos" element={<Producto/>} />
              <Route path="/productos/:id" element={<ProductoDetalle/>} />
              
              <Route path="/usuarios/:id" element={<Users/>}></Route>
              
              <Route path="/contacto" element={<Contact/>} />
              <Route path="/error" element={<Notfound/>} />
            
          </Routes>
        </div>
      </Router>
    </div>
    )
  }
}
export default App;