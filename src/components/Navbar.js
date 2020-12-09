import React from 'react'
import Typist from 'react-typist';

class Navbar extends React.Component{
    render(){
        return (
            <nav className="navbar is-fixed-top">
                <div className="navbar-brand">
                    <Typist>
                    Mathan's Folio
                    </Typist>
                </div>
            </nav>
        );
    }
}

export default Navbar;