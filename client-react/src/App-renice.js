import './App.css';
import SignUp from './components/account/SignUp'
import Login from './components/account/Login';
import AccountEdit from './components/account/AccountEdit';
import Account from './components/account/Account';
import PasswordEdit from './components/account/PasswordEdit';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DeleteAccount from './components/account/DeleteAccount';
import Logout from './components/account/Logout'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/home">
          <h1>Log in success</h1>
        </Route>
        <Route exact path="/user/new">
          <SignUp />
        </Route>
        <Route exact path="/user/login">
          <Login />
        </Route>
        <Route exact path="/logout">
          <Logout />
        </Route>
        <Route exact path="/user/:id">
          <Account />
        </Route>
        <Route exact path="/user/:id/edit">
          <AccountEdit />
        </Route>
        <Route exact path="/user/:id/changepassword">
          <PasswordEdit />
        </Route>
        <Route exact path="/user/:id/delete">
          <DeleteAccount />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;