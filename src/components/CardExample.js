import React from 'react';
import { Card, CardText, CardBody, CardTitle,  } from 'reactstrap';

const CardExample = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle style={{fontSize: 25}}>Speed and Velocity</CardTitle>
          <CardText>The speed of the train is 12 km/hr. </CardText>
          <CardText>There was an obstacle on the path, otherwise it would have travelled faster. </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardExample;