import React, { Component } from 'react';

import api from '../../services/user/api.js';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import "./style.css";

import Group from "./Group.png";

export default class RegisterUser extends Component {


  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      first_name: "",
      last_name: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("state enviado");
    this.registerUser();
  }

  registerUser = async () => {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Acess-Control-Allow-Origin', 'http://localhost:3000');
    headers.append('GET', 'POST', 'PUT', 'DELETE', 'OPTIONS');

    await api.post('/users', this.state, headers)
    .then(response => {
      console.log(response);
      alert("Usuário cadastrado! ");
    })
    .catch(error => {
      console.log(error);
      alert("Erro ao efetuar cadastro! ");
    });
  };


  render() {
    return (
      <div>

      <figure> <img src={Group} alt='Group.png' /> </figure>

        <h2 id="text"> Registro de usuário </h2>

        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Digite o seu usuário:
             <input class="form-control" name="username" type="text" value={this.state.username} onChange={this.handleInputChange} />
            </label>
           </div>

           <div>
             <label>Digite o seu email:
              <input class="form-control" name="email" type="text" value={this.state.email} onChange={this.handleInputChange} />
             </label>
            </div>

            <div>
              <label>Digite o seu nome:
               <input class="form-control" name="first_name" type="text" value={this.state.first_name} onChange={this.handleInputChange} />
              </label>
             </div>

             <div>
               <label>Digite o seu sobrenome:
                <input class="form-control" name="last_name" type="text" value={this.state.last_name} onChange={this.handleInputChange} />
               </label>
              </div>

              <input class="btn btn-primary" type="submit" value="Cadastrar" />
        </form>
      </div>
    );
  }
}
