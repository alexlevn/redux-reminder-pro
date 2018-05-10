import React, {Component} from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="title"></div>
                <div className="form-inline bg-secondary">
                    <div className="form-group p-3">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="I have to ..."/>
                    </div>
                    <button 
                        type="button" 
                        className="btn btn-success">
                        Add Reminder
                    </button>
                </div>
            </div>
        )
    }
}

export default App;