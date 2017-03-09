import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';


class App extends React.Component {
    constructor() {
        super();

        this.addFish = this.addFish.bind(this);

        this.state = {
            fishes: {},
            order: {}
        };
    }

    addFish(fish) {
        //update our state
        
        const fishes = {...this.state.fishes};
        //add in new fish
        const timestamp = Date.now();
        fishes[`fish-${timestamp}`] = fish;
        this.setState({ fishes});
        //this.state.fishes.fish1 = fish;
        //set state
    }
    
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seasfood Market"/>
                </div>
                <Order />
                <Inventory addFish={this.addFish}/>
            </div>
        )
    }
}

export default App;