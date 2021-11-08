import React, { Component } from "react";
import "./style.css";
import {ReactComponent as DeleteSVG} from "../../assets/img/delete.svg"

class CardNote extends Component {

  delete(){
    const index = this.props.ind;
    this.props.eraseNote(index);
  }
  render() {
    return (
      <section className="card-note">
        <header className="card-header">
          <h3 className="card-title">{this.props.title}</h3>
          <DeleteSVG className="delete-svg" onClick={this.delete.bind(this)}/>
          <h4 className="card-cat">{this.props.category}</h4>
        </header>
        <p className="card-text">{this.props.text}</p>
      </section>
    );
  }
}

export default CardNote;
