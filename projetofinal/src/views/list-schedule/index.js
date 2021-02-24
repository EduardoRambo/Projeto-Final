import React, { Component } from 'react';

import api from '../../services/schedule/api.js';

import { Link } from 'react-router-dom';

import "./style.css";

import Group from "./Group.png";

import 'bootstrap/dist/css/bootstrap.min.css';

export default class ListSchedule extends Component {

state = {
  schedules: [],
}

  componentDidMount() {
    this.loadSchedules();
  }

  loadSchedules = async () => {
    const response = await api.get("/schedules");
    this.setState({schedules: response.data['schedules']});

}

render() {
  const { schedules } = this.state;

  return (
    <div>
    <figure> <img src={Group} alt='Group.png'/> </figure>

      <h2 id="quem">Lista de Agendamentos</h2>
      <p> Quantidade de Agendamentos {schedules.length} </p>
      <div className="schedules-list">
        {schedules.map(schedule => (
          <article key={schedule.id}>
            <p>
              Código {schedule.id} <br />
              Nome {schedule.name} <br />
              Email {schedule.email} <br />
              Telefone {schedule.phone} <br />
              Data do Agendamentos {schedule.date} <br />
              Horário {schedule.hour} <br />
            </p>
            <Link to={`/detail-schedule/${schedule.id}`}>Detalhes do agendamento </Link>
          </article>
        ))}
      </div>
    </div>
    );
  }
}
