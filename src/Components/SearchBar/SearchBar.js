import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      term: ""
    }
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.check = this.check.bind(this);
  }

  search(){
    this.props.onSearch(this.state.term);
  };

  check(){
    this.props.onCheck();
  }

  handleTermChange(e){
    this.setState({term: e.target.value});
  }

  render(){
    return(
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange}/>
        <button className="SearchButton" onClick={this.search}>SEARCH</button>
        <button className="SearchButton" onClick={this.check}>CHECK</button>
      </div>
    )
  }
  
}

export default SearchBar;