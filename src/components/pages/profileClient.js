import react, { Component } from "react";

import Nav from "../nav";
import ProfileC from '../profileC';

class profileClient extends Component {

    render() {
        return (
            <div>
                <Nav compo={ProfileC} />
            </div>


        )

    }

}

export default profileClient;