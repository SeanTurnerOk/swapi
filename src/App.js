import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Main from './views/Main';
import People from './views/People';
import Planets from './views/Planets'
import SwapiForm from './components/SwapiForm'
import Error from './views/Error';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SwapiForm/>
        <Switch>
          <Route exact path='/'>
            <Main/>
          </Route>
          <Route exact path='/people/:id'>
            <People/>
          </Route>
          <Route exact path='/planets/:id'>
            <Planets/>
          </Route>
          <Route exact path='/error'>
            <Error/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
