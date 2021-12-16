import "./App.css";
import Home from "./components/home";
import Nav from "./components/nav";
import Register from "./components/register";
import Login from "./components/login";
import Cylinder from "./components/cylinder";
import PageNotFound from "./components/pagenotfound";
import AddCylinder from "./components/addcylinder";
import UpdateCylinder from "./components/updatecylinder";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/cylinders" component={Cylinder} />
        <Route exact path='/cylinder/updateCylinder/:cylinderId' component={UpdateCylinder} />
        <Route exact path='/cylinder/add' component={AddCylinder} />
        
        <Route component={PageNotFound}/>
        <Redirect exact path="/" to="/home" />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
