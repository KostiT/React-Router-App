import React, { Component } from 'react'
import ReactPic from './assets/react-js.jpg'
class Home extends Component {
  render() {
    return (
      <div>
          <h2>Hello World!</h2>
          <h4 className="Ingress">This is an application created using ReactJS and React Router.</h4>

<img src={ReactPic} alt="React1" width="100%"></img>

      </div>
     
    );
  }
}

export default Home;