import React, { Component } from "react";
import "./style.css";

class FormRegistration extends Component {
  constructor(props) {
    super(props);
    this.title = "";
    this.text = "";
    this.category = "Without Category";
    this.state= {categories: []}
    this._newCategories= this._newCategories.bind(this);
  }
  componentDidMount(){
    this.props.categories.subscribe(this._newCategories)
  }
  componentWillUnmount(){
    this.props.categories.unsubscribe(this._newCategories)
  }
  _newCategories(categories){
    this.setState({...this.state, categories});
  }
  _handleCategoryChange(event){
    event.stopPropagation();
    this.category = event.target.value;
}
  _handleChangeTitle(event) {
    event.stopPropagation();
    this.title = event.target.value;
  }
  _handleChangeText(event) {
    event.stopPropagation();
    this.text = event.target.value;
  }
  _createCard(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.createCard(this.title, this.text, this.category);
  }
 
  render() {
    return (
      <form className="form" onSubmit={this._createCard.bind(this)}>
        <select onChange={this._handleCategoryChange.bind(this)} className="select-cat">
          <option>Without Category</option>
          {this.state.categories.map((category, index) => {
            return <option key={index}>{category} </option>;
          })}
        </select>
        <input
          type="text"
          placeholder="Title"
          className="form-title"
          onChange={this._handleChangeTitle.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Write your note"
          className="form-text"
          onChange={this._handleChangeText.bind(this)}
        />
        <button className="form-btn">Create Note</button>
      </form>
    );
  }
}

export default FormRegistration;
