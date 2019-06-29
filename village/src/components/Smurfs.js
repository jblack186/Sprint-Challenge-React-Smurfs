import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Smurf from './Smurf';


class Smurfs extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name : ''
    }
  }

  render(){
    console.log()
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
            
              <Link to={`/smurfs/${smurf.id}` } key={smurf.id}>
              <Smurf 
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
  smurfs: [],
 };

export default Smurfs;
