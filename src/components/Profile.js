import React from 'react';
import WOW from 'wowjs'

class Profile extends React.Component{
    componentDidMount(){
        new WOW.WOW().init();
    }
    render(){
        return (
            <section className="hero is-fullheight" id="cardpg">
                    <div className="herohead">Table of Contents</div>
                    <ul className="steps">
                        <li className="step-item is-completed is-success">
                            <div className="step-marker">
                            <span className="icon">
                                <i className="fa fa-check"></i>
                            </span>
                            </div>
                            <div className="step-details is-completed">
                            <p className="step-title">10th (CBSE)</p>
                            <p className="step-desc">9.8/10</p>
                            </div>
                        </li>
                        <li className="step-item is-completed is-success">
                            <div className="step-marker">
                            <span className="icon">
                                <i className="fa fa-check"></i>
                            </span>
                            </div>
                            <div className="step-details is-completed">
                            <p className="step-title">12th (CBSE)</p>
                            <p className="step-desc">464/500</p>
                            </div>
                        </li>
                        <li className="step-item is-completed is-success">
                            <div className="step-marker">
                            <span className="icon">
                            </span>
                            </div>
                            <div className="step-details is-completed">
                            <p className="step-title">B.Tech in CSE</p>
                            <p className="step-desc">9.22/10</p>
                            </div>
                        </li>
                    </ul>
                    <div className="hero-body">
                        <div className="columns is-vcentered">
                            <div className="column is-6">
                                <img src='/images/skills.png' alt="skills-img"></img>
                            </div>
                            <div className="column is-6">
                            <form>
                                    <fieldset disabled>
                                    <div className="field">
                                    <label className="label">Motto</label>
                                    <div className="control">
                                        <input className="input" type="text" value="My job is to make you jobless"/>
                                    </div>
                                    </div>
                                    </fieldset>
                                </form>
                            <ul class="skill-bars">
				   <li>
				   	<div class="progress"><span>Programming</span></div>
				   	<strong>Python, C, C++</strong>
				   </li>
                   <li>
				   	<div class="progress"><span>Web</span></div>
				   	<strong>HTML, CSS, JS, PHP, MERN</strong>
				   </li>
                   <li>
				   	<div class="progress"><span>DB and OS</span></div>
				   	<strong>SQL, Linux</strong>
				   </li>
					<li>
						<div class="progress"><span>Others</span></div>
						<strong>Flask</strong>
					</li>
				</ul>
                            </div>
                        </div>
                    </div>
            </section>
        );
    }
}

export default Profile;