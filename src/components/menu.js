import React from 'react'
import {Link} from 'react-router-dom'

function Menu(){
    return(
        <React.Fragment>
            <div className="grid">
                <div className="col_8">
                    <ul>
                        <li><Link to="/">Home</Link> </li>
                        <li><Link to="/test">Test</Link></li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Menu