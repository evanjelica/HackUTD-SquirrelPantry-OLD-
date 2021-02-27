import React from 'react';
import { Jumbotron, Container } from 'reactstrap';


const Welcome = (props) => {
    return (
      <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">Welcome to the Squirrel Pantry</h1>
            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
          </Container>
        </Jumbotron>
      </div>
    );
  };

export default Welcome;