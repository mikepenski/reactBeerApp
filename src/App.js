import React from 'react';
import axios from 'axios';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './assets/css/style.css';

import Navbar from './components/Global/Navbar';
import Home from './components/Home/index';
import AllBeers from './components/Beers/AllBeers';
import RandomBeers from './components/Beers/RandomBeers';
import SingleBeer from './components/Beers/SingleBeer';


class App extends React.Component {

  state = {
    headerPaddingTop: '',
    posts: []
  }

  componentDidMount(){

    this.bodyPaddingBottom();
    window.addEventListener('resize', this.bodyPaddingBottom);

    axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
      .then(res => {
        const posts = res.data;
        this.setState({ posts });
        //console.log(posts)
      })

      //this.getPostById();
  
  }

  bodyPaddingBottom = () => {

    let header = document.querySelector(".navbar");
    let header_height = header.offsetHeight;
    document.body.style.paddingBottom = header_height + "px";
  
    }

    getPostById(id) {

      //console.log(this.state.posts);
      return this.state.posts.filter(beer => beer._id === id );
    }

  render(){

    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>

            <Route path="/" exact>
               <Home />
            </Route>

            <Route path="/all-beers" exact>
               <AllBeers data={this.state.posts} />
            </Route>

            <Route path="/random-beers" exact>
               <RandomBeers data={this.state.posts} />
            </Route>

            <Route path="/beer/:id">
              <SingleBeer getPost={e => this.getPostById(e)}></SingleBeer>
           </Route>

          </Switch>
        </div>
      </Router>
    );

  }


}

export default App;

