import React, { Component } from "react";
import "./style.css"

class FormRegistration extends Component {
    
    constructor(props){
        super(props);
        this.title="";
        this.text="";

    }

    _handleChangeTitle(event){
        event.stopPropagation();
        this.title= event.target.value;   
    
    }
    _handleChangeText(event){
        event.stopPropagation();
        this.text = event.target.value;
    
    }
    _createCard(event){
        event.preventDefault();
        event.stopPropagation();
        this.props.createCard(this.title, this.text);
    
    }
    render() {
        return (
            <form className="form" onSubmit={this._createCard.bind(this)}>
                <input type="text" placeholder="Title" className="form-title" onChange={this._handleChangeTitle.bind(this)}/>
                <textarea rows={15} placeholder="Write your note" className="form-text" onChange={this._handleChangeText.bind(this)}/>
                <button className="form-btn">Create Note</button>
            </form>
        );
    }
}

export default FormRegistration;