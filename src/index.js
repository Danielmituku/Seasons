import React  from "react";
import ReactDom from "react-dom";
import SeasonDisplay from "./SeasonDisplay";


class App extends React.Component {
    
    constructor(props){
        super(props);
        this.state = { lat: null, errorMessage: ''};

        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude}),
             (err) => this.setState({errorMessage: err.message})
        );
    }

    componentDidMount(){
        console.log("My compnent just was rerenderd to the screen");
    }

    componentDidUpdate(){
        console.log("My component just updated --> it rerendered!!");
    }
    
    //React says we have to define render method
    render(){
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }

        if(!this.state.errorMessage && this.state.lat){
            return <div>Latitude: {this.state.lat}</div>
        }
        return <div>Loding!</div>;
    }
}


ReactDom.render(<App />, document.querySelector('#root'));