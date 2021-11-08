import React, { Component } from "react";
import "./style.css"

class CategoryList extends Component{

    constructor(){
        super();
        this.state= {categories: []};
        this._newCategories= this._newCategories.bind(this);
    }

    componentDidMount(){
        this.props.categories.subscribe(this._newCategories);
    }
    componentWillUnmount(){
        this.props.categories.unsubscribe(this._newCategories);
    }

    _newCategories(categories){
        this.setState({...this.state, categories});
    }
    _handleEventInput(event){
        if(event.key === "Enter"){
            let valueCategory= event.target.value;  
            this.props.addCategory(valueCategory);
        }
    }
    render(){
        return(
            <section className="cat-sect">   
                <ul className="cat-list">
                    {this.state.categories.map((category, index)=>{ 
                        return <li key={index}>{category}</li>
                    })}
                </ul>
                <input onKeyUp={this._handleEventInput.bind(this)} className="cat-input" type="text" placeholder="Add Category" />
            </section>     
        );
    }
}


export default CategoryList;