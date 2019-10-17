import React from 'react';
import { Container, Jumbotron } from 'reactstrap';
import { animated, useSpring } from 'react-spring';
import NavBar from './NavBar/NavBar';

import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.containersite}>
      <NavBar />
      <Container className={styles.jumbotron}>
        <Jumbotron>
          <h1>Valentin the Hacker</h1>
          <i>Hacking and Programming for everyone</i>
        </Jumbotron>
      </Container>
    </div>
  );
};

export default Header;
