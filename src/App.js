import React, {Component} from 'react';
import './App.css';
import AnswerButton from './components/answer-button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { vote: '' };

}


render() {
  return (
      <div className="App">
          <AnswerButton name="Vote Yes" />
          <AnswerButton name="Vote No" />
      </div>
        );
    }
}

export default App;
