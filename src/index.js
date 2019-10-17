import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function App() {
  return <Router />;
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
