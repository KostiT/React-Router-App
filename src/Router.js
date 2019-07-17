import React, {Component} from 'react'
import RouterImg from './assets/reactRouter.png'
class Router extends Component {
    render(){
        return(
            <div className="routerSection">
                <h2>React Router</h2>

                <p>What is React Router?</p>

                <span><b>React Router </b> is the standard routing library for React. From the docs: “React Router keeps your UI in sync with the URL. It has a simple API with powerful features like lazy code loading, dynamic route matching, and location transition handling built right in</span>
             
                <p>Courtesy of <a href="https://www.freecodecamp.org/news/beginner-s-guide-to-react-router-53094349669/" target="blank">freeCodeCamp</a></p>


                <img src={RouterImg} alt="routerpic" width="100%;" />
                

            </div>
        )
    }
}


export default Router