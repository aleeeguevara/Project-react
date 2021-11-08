import NoteList from "./components/NoteList";
import FormRegistration from "./components/FormRegistration";
import CategoryList from "./components/CategoryList";
import { Component } from "react";
import "./assets/App.css";
import Categories from "./data/Categories";
import NotesArray from "./data/Notes";

class App extends Component {
  constructor() {
    super();
    this.categories= new Categories();
    this.notes= new NotesArray();
  }


  render() {
    return (
      <section className="main-section">
        <FormRegistration
          categories={this.categories}
          createCard={this.notes.createNotes.bind(this.notes)}
        />
        <main>
          <CategoryList
            addCategory={this.categories.addCategory.bind(this.categories)}
            categories={this.categories}
          />
          <NoteList
            eraseNote={this.notes.deleteNotes.bind(this.notes)}
            notes={this.notes}
          />
        </main>
      </section>
    );
  }
}

export default App;
