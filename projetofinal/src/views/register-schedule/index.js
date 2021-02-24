import React, { Component } from 'react';

import api from '../../services/schedule/api.js';

import "./style.css";

import Group from "./Group.png";

import 'bootstrap/dist/css/bootstrap.min.css';


export default class RegisterSchedule extends Component {


  constructor(props) {
    super(props);

    this.state = {
      id: "",
      name: "",
      email: "",
      phone: "",
      date: "",
      hour: ""
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
    this.registerSchedule();
  }

  registerSchedule = async () => {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Acess-Control-Allow-Origin', 'http://localhost:3000');
    headers.append('GET', 'POST', 'PUT', 'DELETE', 'OPTIONS');

    await api.post('/schedules', this.state, headers)
    .then(response => {
      console.log(response);
      alert("Agendamento Realizado! ");
    })
    .catch(error => {
      console.log(error);
      alert("Erro ao realizar agendamento ! ");
    });
  };


  render() {
    return (
      <div>
        <h2 id="quem"> Agendamento </h2>

        <figure> <img src={Group} alt='Group.png' /> </figure>

        <form onSubmit={this.handleSubmit}>

          <div>
            <label>Digite o seu nome:
             <input class="form-control" name="name" type="text" value={this.state.name} onChange={this.handleInputChange} />
            </label>
           </div>

           <div>
             <label>Digite o seu email:
              <input class="form-control" name="email" type="text" value={this.state.email} onChange={this.handleInputChange} />
             </label>
            </div>

            <div>
              <label>Digite o seu telefone:
               <input class="form-control" name="phone" type="text" value={this.state.phone} onChange={this.handleInputChange} />
              </label>
             </div>

             <div>
               <label>Digite a data que deseja agendar:
                <input class="form-control" name="date" type="date" value={this.state.date} onChange={this.handleInputChange} />
               </label>
              </div>

              <div>
                <label>Digite o horário:
                 <input class="form-control" name="hour" type="time" value={this.state.hour} onChange={this.handleInputChange} />
                </label>
               </div>

              <input  class="btn btn-primary" type="submit" value="Agendar" />
        </form>
      </div>
    );
  }
}
