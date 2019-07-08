import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf';
import {Route} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import Delete from './components/Delete';
import SingleSmurf from './components/SingleSmurf';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
     
      
    };
  }

  componentDidMount(){
    axios
    .get(`http://localhost:3333/smurfs`)
      .then(response => {
        this.setState(() => ({ smurfs: response.data }));
        console.log(response)
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  deleteSmurf = (id) => {
    axios.delete(`http://localhost:3333/smurfs/123/${id}`)
    .then(response => console.log(response))
    
    .catch( err => console.log(err.respnse.d))
  }
  
 

  
  
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    const { smurfs } = this.state

    console.log(this.state.smurfs)
    return (
      <div className="App">
      <NavLink exact activeClassName="activeNavButton" to="/">Home</NavLink>
      <NavLink exact activeClassName="activeNavButton" to="/smurfs-form">New Smurf Form</NavLink>
      <NavLink exact activeClassName="activeNavButton" to={`${this.props.match.url}/delete`}>Delete</NavLink>

        <Route exact path='/' render ={ props => { return <Smurfs {...props} smurfs={this.state.smurfs} />}} />

        <Route exact path='/smurfs-form' component={SmurfForm} />
        <Route path='/smurfs/:id' render={ (props) =>  <SingleSmurf {...props}  smurfs={ smurfs } delete={this.deleteSmurfs} up={this.upItem}/>}   />

        <Route exact path='/delete' render={ props => { return <Delete {...props}/>}} />

      </div>
    );
  }
}

export default App;
