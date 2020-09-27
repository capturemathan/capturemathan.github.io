import React from 'react'
import WOW from 'wowjs'

class Welcome extends React.Component{
    componentDidMount()
    {
        new WOW.WOW().init();
    }
    render(){
        return (
            <section className="hero is-fullheight-with-navbar" id="intro">
                <div className="hero-body">
                    <div className="columns is-vcentered">
                        <div className="column is-6">
                            <img src='aboutme.png' alt="portfolio-img"></img>
                        </div>
                        <div className="column is-6 wow animate__animated animate__fadeInRight" id="colright">
                            <div id="hworld" className="has-text-right">
                                Hello World
                            </div>
                            <div id="myname" className="has-text-right">
                                Mathan's Folio
                            </div>
                            <div className="tags are-medium is-right">
                                <span className="tag is-success">Fullstack</span>
                                <span className="tag is-dark">Android</span>
                            </div>
                            <div className="buttons is-right wow animate__animated animate__fadeInDown" data-wow-delay=".5s">
                                <button className="button is-rounded" id="abtbtn">Discover Mathan</button>
                                <button className="button is-rounded" id="cvbtn">Download his CV</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            );
        }   
}
export default Welcome;