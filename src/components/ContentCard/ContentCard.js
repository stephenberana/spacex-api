import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";

class CardContent extends Component {
  constructor() {
    super();

    this.state = {
      launches: [],
    };
  }

  componentDidMount = () => {
    axios.get("https://api.spacexdata.com/latest/launches").then((res) => {
      const launches = res.data;
      this.setState({ launches });
    });
  };

  render() {
    return (
      <div className="CardComponent">
        <Card>
          <Card.Body>
            {this.state.launches.map((launch) => (
              <Card.Title key={launch.id}>{launch.name}</Card.Title>
            ))}
          </Card.Body>
        </Card>

        {/* <Card>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Button variant="primary">View</Button>
          </Card.Body>
        </Card> */}
      </div>
    );
  }
}

export default CardContent;
