import  NoteList  from "./components/NoteList";
import  FormRegistration  from "./components/FormRegistration";
import { Component } from "react";
import "./assets/App.css";

  class App extends Component {
  constructor(){
    super();
    this.state= {
      notes: []
    };
  }  
  createCard(title, text){
    const newNote= {title, text}
    const newArrayNotes = [...this.state.notes, newNote]
    const newState = {
      notes: newArrayNotes
    }
    
    this.setState(newState);
  }

  render() {
    return (
      <section className="main-section">
        <FormRegistration createCard={this.createCard.bind(this)}/>
        <NoteList notes={this.state.notes}/>
      </section>
    );
  }
}

export default App;
 