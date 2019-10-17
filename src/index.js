import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'reactstrap';

import Header from './components/header/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import MainPage from './routes/mainpage/MainPage';
import Information from './routes/information/Information';
import Warning from './routes/warning/Warning';

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/information" component={Information} />
        <Route exact path="/warning" component={Warning} />
      </Container>
    </Router>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
