import React, { Component } from 'react';

type CounterState = {
    count: number
}

type CounterProps ={
    title?: string,
}

class Counter extends Component<CounterProps, CounterState> {
    constructor(props: CounterProps) {
        super(props)

        this.state = {
            count: 0,
        }
    }

    static defaulProps: CounterProps ={
        title: "Default counter: ",
    }

    static getDeivedStateFromProps (props: CounterProps, state: CounterState): CounterState | null {
        return false? {count: 2} : null;
    }
    
    componentDidMount (): void {

    }

    shouldComponentUpdate(nextProps: CounterProps, nextState: CounterState): boolean {
        return true
    }

    AddHandlerClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        console.log(`${e.clientX}, ${e.clientY}`)
        this.setState(({ count }) => ({
            count: ++count,
        }))
    }
    MinusHandlerClick = () => {
        this.setState(({count}) => ({
            count: --count,
        }))
    }
    render() {
        return (
            <div>
                <h1>{this.props.title} {this.state.count}</h1>
                <button onClick={this.AddHandlerClick}>+1</button>
                <button onClick={this.MinusHandlerClick}>-1</button>
                <a href="#" onClick={this.MinusHandlerClick}>Link</a>
            </div>
        );
    }
}

const App = () => <Counter/>

export default App;
