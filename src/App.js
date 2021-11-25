import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './containers/Home';
import About from './containers/About';
import Contact from './containers/Contact';
import Book from './containers/Book/Book';
import BookDetail from './containers/Book/BookDetail';

import Login from "./containers/Account/Login";
import SignUp from "./containers/Account/Signup";
import UserDashboard from "./containers/Account/UserDashboard";

import NotFound from './components/NotFound';

import Layout from './HOC/Layout'

import {Provider} from 'react-redux';
import store from './redux/Store';

const App = () => (
  <Provider store={store}>
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/book" component={Book} />
          <Route exact path="/book/:id" component={BookDetail} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/dashboard" component={UserDashboard} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  </Provider>
);

export default App;
