import React from 'react';
import { Link } from 'react-router-dom';

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      document.title = `You clicked ${this.state.count} times`;
    }
  }

  componentWillUnmount() {
    document.title = `You finished clicking ${this.state.count} times`;
  }

  render() {
    const { count } = this.state;

    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => this.setState({ count: count + 1 })}>
          Click me
        </button>
        <Link to="/">Unmount</Link> 
      </div>
    );
  }
  
}

export default Example;