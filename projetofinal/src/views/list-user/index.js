import React, { Component } from 'react';

import api from '../../services/user/api.js';

import { Link } from 'react-router-dom';

import "./style.css";

import Group from "./Group.png";

import 'bootstrap/dist/css/bootstrap.min.css';

export default class ListUser extends Component {

state = {
  users: [],
}

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = async () => {
    const response = await api.get("/users");
    this.setState({users: response.data['users']});

}

render() {
  const { users } = this.state;

  return (
    <div>
    <figure> <img src={Group} alt='Group.png'/> </figure>

    <h2 id="quem">Lista de usuários</h2>
      <p id="text"> Quantidade de usuários {users.length} </p>
      <div className="users-list">
        {users.map(user => (
          <article key={user.id}>
            <p>
              Código: {user.id} <br />
              Username: {user.username} <br />
              Email: {user.email}
            </p>
            <Link to={`/detail-user/${user.id}`}>Detalhes do usuário </Link>
          </article>
        ))}
      </div>
    </div>
    );
  }
}
