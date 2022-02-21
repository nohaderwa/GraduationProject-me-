import React, { Component } from "react";

import Nav from '../nav'
import SignC from '../signC';


class signUpClient extends Component {
    render() {
        return (
            <div>
                <Nav compo={SignC} />
            </div>
        )
    }
}

export default signUpClient;
