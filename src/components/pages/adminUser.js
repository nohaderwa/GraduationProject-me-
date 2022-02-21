import React, { Component } from "react";

import Nav from './../nav'
import Register from "./../register";


class AdminUser extends Component {
    render() {
        return (
            <div>
                <Nav compo={Register} />
            </div>
        )
    }
}

export default AdminUser;
