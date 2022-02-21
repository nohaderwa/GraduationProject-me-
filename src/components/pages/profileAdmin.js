import react, { Component } from "react";

import Nav from "../nav";
import ProfileA from '../profileA';

class profileAdmin extends Component {

    render() {
        return (
            <div>
                <Nav compo={ProfileA} />
            </div>


        )

    }

}

export default profileAdmin;