import React, { Component } from 'react';
import api from '../../services/user/api.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import "./style.css";

export default class DetailUser extends Component {

  state = {
    id: "",
    username: "",
    email: "",
    first_name: "",
    last_name: "",
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
    this.updateUser();
  }


  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await api.get(`/users/${id}`);
    this.setState(
      {
        id: id,
        username: response.data.username,
        first_name: response.data.first_name,
        last_name: response.data.last_name,
        email: response.data.email
      }
    );
  }

  deleteUser = async () => {
    const { id } = this.state;
    const response = await api.delete(`/users/${id}`);

    if(response.status === 200) {
      alert("Usuário excluido com sucesso!");
      this.props.history.push('/list-user');
    }
  }

  updateUser = async () => {
    await api.put('/users', this.state)
    .then(response => {
      alert('Usuário alterado com sucesso!');
      this.props.history.push('/list-user');
    })
    .catch(error=> {
      alert('Erro ao alterar usuário');
    })
  }

  render() {

    const { id, username, first_name, last_name, email } = this.state;

    return (
      <div  className="detail-user">

        <h2 id="quem">Detalhe do usuário</h2>
        <h2>{first_name} {last_name}</h2>
        <p>
        Código: {id} <br />
        Username {username} <br />
        Email: {email} <br />
        </p>

          <h2 id="quem"> Alterar dados do usuário </h2>

          <form onSubmit={this.handleSubmit}>

            <div>
              <label>Digite o seu usuário:
               <input name="username" type="text" value={this.state.username} onChange={this.handleInputChange} />
              </label>
             </div>

             <div>
               <label>Digite o seu email:
                <input name="email" type="text" value={this.state.email} onChange={this.handleInputChange} />
               </label>
              </div>

              <div>
                <label>Digite o seu nome:
                 <input name="first_name" type="text" value={this.state.first_name} onChange={this.handleInputChange} />
                </label>
               </div>

               <div>
                 <label>Digite o seu sobrenome:
                  <input name="last_name" type="text" value={this.state.last_name} onChange={this.handleInputChange} />
                 </label>
                </div>

                <input class="btn btn-primary" type="submit" value="Alterar" />

          </form>

        <button class="btn btn-primary" onClick={() => this.deleteUser()}>
        Excluir usuário
        </button>
      </div>
    );
  }
}
