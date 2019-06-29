import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf';
import {Route} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      
    };
  }

  componentDidMount(){
    axios
    .get(`http://localhost:3333/smurfs`)
      .then(response => {
        this.setState(() => ({ smurfs: response.data }));
        console.log(response.data)
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }


  
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    
    return (
      <div className="App">
      <NavLink exact activeClassName="activeNavButton" to="/">Home</NavLink>
      <NavLink exact activeClassName="activeNavButton" to="/smurfs-form">New Smurf Form</NavLink>
        <Route exact path='/' render ={ props => { return <Smurfs {...props} smurfs={this.state.smurfs} age={this.state.smurfs.age}/>}} />

        <Route exact path='/smurfs-form' component={SmurfForm} />


      </div>
    );
  }
}

export default App;
