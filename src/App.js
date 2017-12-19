import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Question from "./components/Question";

class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
          counter: 0,
          questionId: 1,
          question: '',
          answerOptions: [],
          answer: '',
          answersCount: {
              nintendo: 0,
              microsoft: 0,
              sony: 0
          },
          result: ''
      };
  }
  render() {
    return (
      <div className="App">
        <Question
            content="What is your favorite food"
        />
      </div>
    );
  }
}

export default App;
