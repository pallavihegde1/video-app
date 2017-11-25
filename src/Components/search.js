import React, { Component } from 'react';

class SearchComponent extends Component {

  constructor(props){
    super(props);

    this.state = {term: ''};
  }

  // handleInputChange = (e) =>
  //   console.log(e.target.value)

  onInputChange = (term) => {
    this.setState({term});
    this.props.OnSearchChange(term)
    console.log(term);
  }


  render(){
    return(
      <div>
         Search Here
          <input onChange={(e) => this.handleInputChange(e)}/>
          {/* <input onChange={e => console.log(e.target.value)}/> */}
          <input value={this.state.term} onChange={(e) => this.onInputChange(e.target.value)} />
      </div>
    );
  }
}

export default SearchComponent;
