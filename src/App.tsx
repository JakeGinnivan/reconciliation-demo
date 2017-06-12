import * as React from 'react'
import './App.css'
import BasicTextDemo from './demos/BasicTextDemo'
import ChangeListDemo from './demos/ChangeListDemo'

const logo = require('./logo.svg')

class App extends React.Component<{}, null> {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>React reconciliation demo</h2>
                </div>
                <p className="App-intro">
                    The point of this demo is to demonstrate how React reconciliation works and to investigate
                    how safe it is to do different types of DOM manipulation outside of React
                </p>

                <hr />
                <BasicTextDemo />

                <hr />
                <ChangeListDemo />
            </div>
        )
    }
}

export default App
