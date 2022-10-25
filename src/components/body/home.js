import React, { Component } from "react";
import Loading from "./loading";
// import { connect } from 'react-redux';



class Home extends Component {
    render() {
        document.title = "Rest In Cheese"
        return (
            <div>
                <h1>This is HOME!</h1>
                <Loading />
            </div>
        )
    }
}

export default Home;