import React, {Component} from 'react';

class Counter extends Component{
    constructor(props){
        super(props);
        this.incCount : this.incCount.bind(this);
        this.state = { count : 0 };
    }
    
    incCount(){
        this.setState({count : this.state.count + 1}); 
    }
    
    render(){
        return(
            <button onClick={this.incCount}>Count : {this.state.count}</button>
        );
    }
}

export default Counter;