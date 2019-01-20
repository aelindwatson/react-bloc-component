import React, {Component} from 'react';
import './App.css';
import './components/AnswerButton.js';

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
