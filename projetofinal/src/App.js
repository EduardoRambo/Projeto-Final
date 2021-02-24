import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Footer from './components/footer';

import Routes from './routes';
import { BrowserRouter, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App" className="jumbotron"  id="main-header">
      <BrowserRouter>
        <Header />
        <nav class ="navbar navbar-expand-lg navbar-dark fixed-top "  id="menu">
          <ul>
            <li class="btn btn-link"><Link className="menu" to={`/`}>Home</Link></li>
            <li class="btn btn-link"><Link className="menu" to={`/register-user`}>Cadastrar Usuário</Link></li>
            <li class="btn btn-link"><Link className="menu" to={`/list-user`}>Consultar Usuário</Link></li>

            <li class="btn btn-link"><Link className="menu" to={`/register-schedule`}>Realizar Agendamento</Link></li>
            <li class="btn btn-link"><Link className="menu" to={`/list-schedule`}>Consultar Agendamento</Link></li>
          </ul>
        </nav>
        <Routes/>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
