import React, { Component } from 'react';
import WOW from 'wowjs';
var quoteJSON = require('../api/quotes.json');
var projJSON = require('../api/projects.json');

class Project extends Component {
    state = {
        qtTitle:quoteJSON["quotes"][0]["qt-title"],
        qtDesc:quoteJSON["quotes"][0]["qt-desc"],
        projTitle:projJSON["projects"][0]["proj-title"],
        projDesc:projJSON["projects"][0]["proj-desc"],
        projTags:projJSON["projects"][0]["proj-tags"],
        projImg:projJSON["projects"][0]["proj-img"]
    }

    componentDidMount(){
        new WOW.WOW().init();
    }

    getQuote(){
        var maxm = Math.floor((quoteJSON["quotes"].length)-1)
        var minm = Math.ceil(0);
        var randQ= Math.floor(Math.random() * (maxm - minm + 1)) + minm; 
        console.log(maxm,minm,randQ)
        this.setState({qtTitle:quoteJSON["quotes"][randQ]["qt-title"],qtDesc:quoteJSON["quotes"][randQ]["qt-desc"]})
    }

    getProject(){
        var maxm = Math.floor((projJSON["projects"].length)-1)
        var minm = Math.ceil(0);
        var randQ= Math.floor(Math.random() * (maxm - minm + 1)) + minm; 
        console.log(maxm,minm,randQ)
        this.setState({projTitle:projJSON["projects"][randQ]["proj-title"],projImg:projJSON["projects"][randQ]["proj-img"],projDesc:projJSON["projects"][randQ]["proj-desc"],projTags:projJSON["projects"][randQ]["proj-tags"]})
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
                            <button className="button is-rounded randombtn" onClick={()=>this.getProject()}>
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
                                        <img className="is-rounded proj-logo" alt="proj-logo" src={this.state.projImg}/>
                                    </figure>
                                </div>
                                <div className="column">
                                    <div className="box">
                                        <div className="proj-title has-text-centered">
                                            {this.state.projTitle}
                                        </div>
                                        <div className="proj-desc">
                                            {this.state.projDesc}
                                        </div>
                                        <div className="tags are-medium is-right proj-tags">
                                            {this.state.projTags.map((elem)=>
                                            <span className="tag is-success">
                                                {elem}
                                            </span>
                                            )}
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
                            <button className="button is-rounded randombtn" onClick={()=>this.getQuote()}>
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
                                        {this.state.qtTitle}
                                    </div>
                                    <div className="qt-desc">
                                        {this.state.qtDesc}
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