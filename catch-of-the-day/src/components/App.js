import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';


class App extends React.Component {
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Wes is Cool" age="5000" cool="true"/>
                </div>
                <Order />
                <Inventory />
            </div>
        )
    }
}

export default App;