import React, {Component, Fragment} from 'react';
import axios from "axios";
import './App.css';
import SearchBox from './components/SearchBox/SearchBox';
import { Card } from './components/Card/Card';
import { Modal } from './components/Card/Modal';
import InfiniteScroll from 'react-infinite-scroll-component';

class App extends Component {
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
      <div className="container">
        <div className="row">
        <SearchBox placeholder="Search..." handleChange={(e) => console.log(e.target.value)}/>
          {this.state.launches.map((launch) => (
          <Fragment>
          <Card launch={launch}/>
          <Modal launch={launch}/>
          </Fragment>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
