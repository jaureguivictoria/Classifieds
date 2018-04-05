import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router';


class Master extends Component {
  render(){
    return (
        <div className="container">
            <div className="row mt-4 mb-4">
                <div className="col-sm-12">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link className="navbar-brand" to="/">Inicio</Link>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav  ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="add-item">Crear anuncio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="display-item">Anuncios</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    {this.props.children}
                </div>
            </div>
        </div>
    )
  }
}
export default Master;