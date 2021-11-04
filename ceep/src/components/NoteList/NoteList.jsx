import React, { Component } from "react";
import CardNote from "../CardNote";
import "./style.css";

class NoteList extends Component{
  render(){
        return(      
            <ul className="card-list">
              {this.props.notes.map((note, index) => {
                return (
                  <li key={index} className= "card-item">
                    <CardNote title={note.title} text={note.text}/>
                  </li>
                );  
              })}
         
            </ul>
            );
    }
}

export default NoteList;