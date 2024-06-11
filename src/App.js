import {BrowserRouter, Route, Switch} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import RegistrationForm from './components/RegistrationForm'
import ProtectedRoute from './components/ProtectedRoute'
import LandingPage from './components/LandingPage'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/register" component={RegistrationForm} />
      <ProtectedRoute exact path="/" component={LandingPage} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
