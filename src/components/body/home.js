import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCake } from "@fortawesome/free-solid-svg-icons";
// import { connect } from 'react-redux';



class Home extends Component {
    render() {
        document.title = "Rest In Cheese"
        return (
            <div>
                <h1>This is HOME!</h1>
                <div className="col-12" style={{ padding: '60px' }}>
                    <FontAwesomeIcon className="fa-7x" icon={faCake} />

                </div>
            </div>
        )
    }
}

export default Home;