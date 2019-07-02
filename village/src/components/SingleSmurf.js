import React, { Component } from 'react';
import { Route, NavLink, Link } from "react-router-dom";
import axios from 'axios';


export default class SingleSmurf extends React.Component{
    constructor(props){
    super(props)

    }

    upItem = (evt) => {
        evt.preventDefault()

		const id = this.props.match.params.id
		const { name, price, imageUrl, description, shipping } = this.state
		const payload = { name, price, imageUrl, description, shipping }
		
		axios.put(`http://localhost:3333/smurfs/123/${id}`, payload)
			.then((response) => {
				console.log(response)
				
				
				this.props.upItem(response.data)
				this.props.history.push("/")
			})
			.catch((err) => {
				console.log(err)
				})
}
    

    deleteSmurfs = (e) => {
        console.log(this.props)
        e.preventDefault()
        const id = this.props.match.params.id
        axios.delete(`http://localhost:3333/smurfs/${id}`)
        .then(response => this.upItem(response.data))
        
        .catch( err => console.log(err.response))
      }
    
    render(){
    const smurf = this.props.smurfs.find(i => String(i.id) === this.props.match.params.id)
    console.log(this.props.smurfs)
if (!smurf) {
    return <div>Loading...</div>
}


return (
    <div>
      <p>{smurf.name}</p>  
      <p>{smurf.age} years old</p>
      <p>{smurf.height} cm tall </p>
    <button type ='button' onClick={this.deleteSmurfs}>Delete</button>
    </div>
) 
}
}