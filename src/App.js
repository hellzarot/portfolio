import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Tools from "./pages/Tools";
import NotFound from "./pages/NotFound";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/contact" exact component={Contact}></Route>
          <Route path="/competences" exact component={Skills}></Route>
          <Route path="/mes_outils" exact component={Tools}></Route>
          <Route path="/a_propos" exact component={About}></Route>
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
