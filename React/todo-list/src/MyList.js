import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItem';

// From: Index.js
// var toDos = ["Buy ice cream", "Eat ice cream", "Go to the gym"]

// ReactDOM.render(
//   <MyList todoItems={theList} />,
//   document.getElementById('root')
// )

class MyList extends Component {

  render() {

    let todoItems = this.props.theList.map( (item, index) => (
      <ListItem doThis={item} key={index} />
    ))

    return (
      <div>
        <h1>Things I should stop procrastinating:</h1>
        <ul>
          {todoItems}
        </ul>
      </div>
    )
  }
}


export default MyList