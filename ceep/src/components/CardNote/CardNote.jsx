import React, { Component } from "react";
import "./style.css";

class CardNote extends Component {
  render() {
    return (
      <section className="card-note">
        <header className="card-header">
          <h3 className="card-title">{this.props.title}</h3>
        </header>
        <p className="card-text">{this.props.text}</p>
      </section>
    );
  }
}

export default CardNote;
