import React, { Component } from 'react';
import Typist from 'react-typist';
import WOW from 'wowjs'

class Project extends Component {
    componentDidMount(){
        new WOW.WOW().init();
    }
    render() {
        return (
            <section id="projectpg">
                <div className="hero-head has-text-centered">Peek a Boo</div>
                    <div className="columns is-vcentered projects">
                        <div className="column is-3 has-text-centered">
                            <div className="subtitle">
                                Project
                            </div>
                            <button className="button is-rounded randombtn">
                                <span className="icon is-small">
                                    <i className="fas fa-random"></i>
                                </span>
                                <span>Randomize</span>
                            </button>
                        </div>
                        <div className="column is-8">
                            <div className="columns is-vcentered">
                                <div className="column is-3">
                                    <figure className="image is-128x128 wow animate__animated animate__bounce">
                                        <img className="is-rounded proj-logo" alt="proj-logo" src="logo_anokha.png"/>
                                    </figure>
                                </div>
                                <div className="column">
                                    <div className="box">
                                        <div className="proj-title has-text-centered">
                                            Anokha (Techfest of Amrita University)
                                        </div>
                                        <div className="proj-desc">
                                            Developed an elegant and secure android app for the techfest using JWT that facilitates registration of events, workshops with 10k+ Downloads, and 4.2 Stars in Play Store.
                                        </div>
                                        <div className="tags are-medium is-right proj-tags">
                                            <span className="tag is-success">Android</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="columns is-vcentered quotes">
                        <div className="column is-3 has-text-centered">
                            <div className="subtitle">
                                Quote
                            </div>
                            <button className="button is-rounded randombtn">
                                <span className="icon is-small">
                                    <i className="fas fa-random"></i>
                                </span>
                                <span>Randomize</span>
                            </button>
                        </div>
                        <div className="column is-8">
                            <div className="box">
                                <div className="myquote">
                                    <div className="qt-title has-text-centered">
                                        Quarantine
                                    </div>
                                    <div className="qt-desc">
                                        <Typist>
                                        Some relations never knew physical boundaries whereas some relations had always been practising Social Distancing
                                        </Typist>
                                    </div>
                                </div>
                                <div className="tags are-medium is-right proj-tags">
                                    <span className="tag is-warning">Mathan Scribbles</span>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        )
    }
}

export default Project;