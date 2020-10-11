import React from 'react';
import GitHubCalendar from 'github-calendar';
import WOW from 'wowjs'

class Profile extends React.Component{
    componentDidMount(){
        GitHubCalendar(".calendar", "capturemathan", { responsive: true });
        new WOW.WOW().init();
    }
    render(){
        return (
            <section className="hero is-fullheight-with-navbar" id="cardpg">
                    <div className="hero-head has-text-centered">Tech Trails</div>
                    <ul className="steps">
                        <li className="step-item is-completed is-success">
                            <div className="step-marker">
                            <span className="icon">
                                <i className="fa fa-check"></i>
                            </span>
                            </div>
                            <div className="step-details is-primary is-completed">
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
                            <div className="step-details is-primary is-completed">
                            <p className="step-title">12th (CBSE)</p>
                            <p className="step-desc">464/500</p>
                            </div>
                        </li>
                        <li className="step-item is-completed is-warning">
                            <div className="step-marker">
                            <span className="icon">
                            </span>
                            </div>
                            <div className="step-details is-primary is-completed">
                            <p className="step-title">B.Tech in CSE</p>
                            <p className="step-desc">9.22/10</p>
                            </div>
                        </li>
                    </ul>
                    <div className="hero-body wow animate__animated animate__fadeInDown">
                        <div className="columns">
                            <div id="LI-profile-badge" className="LI-profile-badge column is-narrow is-offset-1"  data-version="v1" data-size="large" data-locale="en_US" data-type="horizontal" data-theme="light" data-vanity="mathana-kumar-s-87b42714a"><a className="LI-simple-link" href='https://in.linkedin.com/in/mathana-kumar-s-87b42714a?trk=profile-badge'>Mathana Kumar S</a>
                            </div>
                            
                            <div className="calendar column is-narrow">
                            </div>
                        </div>
                    </div>
            </section>
        );
    }
}

export default Profile;