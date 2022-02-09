import React, { Component } from "react";
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
        {this.state.launches.map((launch) => (
          <div className="card" key={launch.id}>
            <div className="card-body">
              <h1 className="card-text">{launch.name}</h1>
              <a href="#" className="btn btn-primary">
                View
              </a>
            </div>
          </div>
        ))}

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
