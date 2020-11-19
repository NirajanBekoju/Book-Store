import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './containers/Home';
import About from './containers/About';
import Contact from './containers/Contact';
import Book from './containers/Book/Book';
import BookDetail from './containers/Book/BookDetail';

import NotFound from './components/NotFound';

import TopBar from './HOC/Layout'

const App = () => (
  <Router>
    <TopBar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/book" component={Book} />
        <Route exact path="/book/:id" component={BookDetail} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </TopBar>
  </Router>
);

export default App;
