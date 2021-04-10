import { getAllBeers } from './API/BeerAPI';
import { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


//import components and styling
import './assets/css/style.css';
import Navbar from './components/Global/Navbar';
import Home from './components/Home/index';
import AllBeers from './components/Beers/AllBeers';
import RandomBeers from './components/Beers/SingleRandom';
import SingleBeer from './components/Beers/SingleBeer';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      randomPost : {}
    }
  }

  state = {
    headerPaddingTop: '',
    posts: [],
    randomPost : {}
  }

  componentDidMount(){

    this.bodyPaddingBottom();
    window.addEventListener('resize', this.bodyPaddingBottom);

     //Get all beers
     getAllBeers().then(data => this.setState({posts: data}));
 
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

            <Route path="/random-beer" exact
                  render={ () => (  
                    <RandomBeers data={this.state.randomPost} />
                  )}
                />

            <Route path="/beer/:id">
              <SingleBeer getPost={e => this.getPostById(e)}></SingleBeer>
           </Route>

          </Switch>
        </div>
      </Router>
    );

  }


}


