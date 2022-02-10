import React, {Component, Fragment} from 'react';
import axios from "axios";
import './App.css';
import SearchBox from './components/SearchBox/SearchBox';
import { Card } from './components/Card/Card';
import { Modal } from './components/Card/Modal';
import InfiniteScroll from 'react-infinite-scroll-component';

const API = 'https://api.spacexdata.com/v5/launches'
const params = {
  page: 1,
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      launches: [],
    };
  }

  componentDidMount = () => {
    axios.get(`${API}/query`, {options: params}).then((res) => {
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
            <InfiniteScroll
              dataLength={this.state.launches.length}
              // next={this.fetchLaunches}
              hasMore={true}
              loader={<div class="spinner-grow" role="status">
              <span class="sr-only">Loading...</span>
            </div>}
            >
            <Card launch={launch}/>
            <Modal launch={launch}/>
            </InfiniteScroll>
          </Fragment>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
