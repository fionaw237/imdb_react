import React, {Component} from 'react';
import TopContainer from './TopContainer';

class MainContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        {
          id: 1, title: "Sausage Party"
        },
        {
          id: 2, title: "Cafe Society"
        },
        {
          id: 3, title: "Morgan"
        },
        {
          id: 4, title: "The 9th Life of Louis Drax"
        },
        {
          id: 5, title: "Naam Hai Akira"
        },
        {
          id: 6, title: "Equity"
        },
        {
          id: 7, title: "Things To Come"
        }
      ]
    }
  }
  render(){
    return (
      <div className="main-container">
        <h1 className="main-headings">UK Opening This Week</h1>
       <TopContainer data={this.state.data}/>
       <hr></hr>
       <button>Get Showtimes >></button>
      </div>
    )
  }
}

export default MainContainer;
