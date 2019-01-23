import React, {Component} from 'react';
import './App.css';
import AnswerButton from './components/answer-button';

class App extends Component {
    render() {
        return (
            <div className="App">
                <AnswerButton />
                <AnswerButton />
            </div>
        );
    }
}

export default App;
