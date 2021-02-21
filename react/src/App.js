import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './components/Pages/HomePage';
import LoginPage from './components/Pages/LoginPage';
import RegistroPage from './components/Pages/RegistroPage';
import ReservaPage from './components/Pages/ReservaPage';
import AdminPage from './components/Pages/AdminPage';
import UsuarioPage from './components/Pages/UsuarioPage';

import AuthState from './context/auth/authState';
import AlertasState from './context/alertas/alertasState';

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './config/theme';
import tokenAuth from './config/token';

import RutaPrivada from './components/rutas/RutaPrivada';

const token = localStorage.getItem('token');
if (token) tokenAuth(token);

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <AuthState>
        <AlertasState>
          <Router>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/registro" component={RegistroPage} />
              <Route exact path="/reserva" component={ReservaPage} />
              <RutaPrivada exact path="/dashboard" component={AdminPage} />
              <RutaPrivada exact path="/usuario" component={UsuarioPage} />
            </Switch>
          </Router>
        </AlertasState>
      </AuthState>
    </ThemeProvider>
  );
}

export default App;
