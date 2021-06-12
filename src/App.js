import { Route, Switch } from 'react-router';
import './App.css';
import LoginPage from './LoginPage/LoginPage.js'
import Main from './Main/Main.js'
import DashBoard from './DashBoard/DashBoard';
import Projects from './Projects/Projects'
function App() {
  if (localStorage.getItem('Logged')==='True') {
    return(
    <Switch>
        <Route exact path="/DashBoard" component={DashBoard} />
        <Route path="/Projects" component={Projects} />
        <Route component={DashBoard} />
      </Switch>);
  }else {
    return (
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/Login" component={LoginPage} />
        <Route component={Main} />
      </Switch>
    );
  }
}

export default App;
