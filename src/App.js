import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import DatosAuto from './components/DatosAuto';
import Header from './components/Header'
import Home from './components/Home'
import Thanks from './components/Thanks';


function App() {

  const [usuario, setUsuario] = useState({
    id:'',
    tipoDoc:'',
    doc:'',
    celular:'',
    placa:'',
    nombre:'',
    apellido:'',
    correo:'',
    vehiculo:{
      anio:'',
      marca:'',
      modelo:'',
      combustible:''
    }
  })

  const [plan, setPlan] = useState({});



  return (
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home setUsuario={setUsuario} usuario={usuario}/>
          </Route>
          <Route exact path='/datos-auto/:tipo' children={<DatosAuto setUsuario={setUsuario} usuario={usuario}/>}></Route>
          <Route exact path='/thanks'>
            <Thanks usuario={usuario} setUsuario={setUsuario}/>
          </Route>
        </Switch>

      </Router>

  );
}

export default App;
