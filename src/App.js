
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import Taks from './compoents/Taks/Taks';

function App() {
  return (
    <BrowserRouter>
    <Switch>

      <Route exact path="/" name="Task" render={props => <Taks {...props} />} />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
