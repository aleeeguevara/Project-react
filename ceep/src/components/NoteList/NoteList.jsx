import React, { Component } from "react";
import CardNote from "../CardNote";
import "./style.css";

class NoteList extends Component{
  constructor(){
    super();
    this.state = {notes: []};
    this._newNotes= this._newNotes.bind(this);
  }
  componentDidMount(){
    this.props.notes.subscribe(this._newNotes);
  }
  componentWillUnmount(){
    this.props.notes.unsubscribe(this._newNotes);
  }
  _newNotes(notes){
    this.setState({...this.state, notes})
  }
  render(){
        return(      
            <ul className="card-list">
              {this.state.notes.map((note, index) => {
                return (
                  <li key={index} className= "card-item">
                    <CardNote ind={index} eraseNote={this.props.eraseNote} title={note.title} text={note.text} category={note.category}/>
                  </li>
                );  
              })}
         
            </ul>
            );
    }
}

export default NoteList;