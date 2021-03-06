import React, { Component } from 'react';
import './App.css';
import Doctores from './Doctores';
import Horarios from './horarios';
import Agendar from './Agendar';
import listaPacientes from './listaPacientes';
import Recaudado from './Recaudado';
import inicio from './inicio';
import Historias from './Historias'
import CitasPorMes from './CitasPorMes';





import {
  BrowserRouter as Router,
  StaticRouter, // for server rendering
  Route,
  Link
  // etc.
} from 'react-router-dom'
class App extends Component {
  render() {
    return (

 <Router>
 <div className="App">
 <div className="App-header">
   <h1>Smile Fresh</h1>
 </div>
 <div className="App-navbar">
   <nav class="navbar navbar-inverse">
      <div class="container-fluid">
         <ul class="nav navbar-nav">

                 <li><Link to="/">Smile-Fresh</Link></li>






                 <li><Link to="/doctores">Listado Doctores</Link></li>
                 <li><Link to="/horarios">Horarios Doctores</Link></li>
                  <li><Link to="/listaPacientes">Pacientes</Link></li>
                   <li><Link to="/CitasPorMes">Citas por mes</Link></li>
                   <li><Link to="/Historias">Historias</Link></li>

                 <li><Link to="/agendar">Agendar Cita</Link></li>
                  <li><Link to="/Recaudado">Recaudado</Link></li>


         </ul>
       </div>
     </nav>

      <Route exact path="/" component={inicio}/>
      <Route path="/doctores" component={Doctores}/>
      <Route path="/horarios" component={Horarios}/>
      <Route path="/listaPacientes" component={listaPacientes}/>
      <Route path="/CitasPorMes" component={CitasPorMes}/>
      <Route path="/agendar" component={Agendar}/>
      <Route path="/Recaudado" component={Recaudado}/>
      <Route path="/Historias" component={Historias}/>

   </div>









 </div>
</Router>

    );
  }
}

export default App;
