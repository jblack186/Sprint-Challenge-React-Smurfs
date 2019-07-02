import React, { Component } from 'react';
import axios from 'axios';

class Delete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      name: '',
      age: '',
      height: ''
    };
  }

componentDidMount() {
  const id = this.props.match.params.id
axios.get(`http://localhost:3333/smurfs/${id}`)
.then(response => {
  const {name, age, height} = response.data
  this.setState({ name, age, height })
})
}

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
   
      event.preventDefault()

      axios.post(`http://localhost:3333/smurfs`, this.state)
      .then(response => {
          console.log(response)

      })
      .catch(error => {
          console.log(error)
      })
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };



updateItem = (e) => {
  e.preventDefault();
  const { name, age, height } = this.state
  const payload = { name, age, height }
  const id = this.props.match.params.id

  axios.put(`http://localhost:3333/smurfs/${id}`, payload) 
  .then(response => console.log(response))
  .catch ((err) => {
    console.log(err)
  })
}

  

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.deleteSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default Delete;
