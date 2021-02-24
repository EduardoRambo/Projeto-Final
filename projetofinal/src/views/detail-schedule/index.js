import React, { Component } from 'react';
import api from '../../services/schedule/api.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import "./style.css";

export default class DetailSchedule extends Component {

  state = {
    id: "",
    name: "",
    email: "",
    phone: "",
    date: "",
    hour: "",
  };

  constructor(props) {
    super(props);

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
    this.updateSchedule();
  }


  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await api.get(`/schedules/${id}`);
    this.setState(
      {
        id: id,
        name: response.data.name,
        email: response.data.email,
        phone: response.data.phone,
        date: response.data.date,
        hour: response.data.hour
      }
    );
  }

  deleteSchedule = async () => {
    const { id } = this.state;
    const response = await api.delete(`/schedules/${id}`);

    if(response.status === 200) {
      alert("Agendamento cancelado!");
      this.props.history.push('/list-schedule');
    }
  }

  updateSchedule = async () => {
    await api.put('/schedules', this.state)
    .then(response => {
      alert('Agendamento alterado!');
      this.props.history.push('/list-schedule');
    })
    .catch(error=> {
      alert('Erro ao alterar');
    })
  }

  render() {

    const { id, name, email, phone, date, hour } = this.state;

    return (
      <div className="detail-user">

        <h2 id="quem">Detalhe do agendamento</h2>
        <h2>{name}</h2>
        <p>
        Código: {id} <br />
        Email: {email} <br />
        Telefone: {phone} <br />
        Data: {date} <br />
        Horário: {hour} <br />
        </p>

          <h2 id="quem"> Alterar dados do agendamento </h2>

          <form onSubmit={this.handleSubmit}>

            <div>
              <label>Digite o seu usuário:
               <input  class="form-control" name="name" type="text" value={this.state.name} onChange={this.handleInputChange} />
              </label>
             </div>

             <div>
               <label>Digite o seu email:
                <input  class="form-control" name="email" type="text" value={this.state.email} onChange={this.handleInputChange} />
               </label>
              </div>

              <div>
                <label>Digite o seu telefone:
                 <input  class="form-control" name="phone" type="tel" value={this.state.phone} onChange={this.handleInputChange} />
                </label>
               </div>

               <div>
                 <label>Digite a data:
                  <input  class="form-control" name="date" type="date" value={this.state.date} onChange={this.handleInputChange} />
                 </label>
                </div>

                <div>
                  <label>Digite o horário:
                   <input  class="form-control" name="hour" type="time" value={this.state.hour} onChange={this.handleInputChange} />
                  </label>
                 </div>

                <input class="btn btn-primary" type="submit" value="Alterar" />

          </form>

        <button class="btn btn-primary" onClick={() => this.deleteSchedule()}>
        Cancelar agendamento
        </button>
      </div>
    );
  }
}
