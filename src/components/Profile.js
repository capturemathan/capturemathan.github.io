import React from "react";
import WOW from "wowjs";
import ReactTooltip from "react-tooltip";

class Profile extends React.Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
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
              <span className="icon"></span>
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
              <img src="/images/skills.png" alt="skills-img"></img>
            </div>
            <div className="column is-6">
              <form className="motto">
                <fieldset disabled>
                  <div className="field">
                    <label className="label">Motto</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        value="My job is to make you jobless"
                      />
                    </div>
                  </div>
                </fieldset>
              </form>
              <div className="columns is-vcentered">
                <div className="column is-3 is-offset-1 skill-name has-text-centered">
                  Programming
                </div>
                <div className="column">
                  <span data-tip="Python">
                    <span className="skill-icon">
                      <i class="fab fa-python"></i>
                    </span>
                  </span>
                  <ReactTooltip />
                  <span data-tip="Java">
                    <span className="skill-icon">
                      <i class="fab fa-java"></i>
                    </span>
                  </span>
                  <ReactTooltip />
                </div>
              </div>
              <div className="columns is-vcentered">
                <div className="column is-3 is-offset-1 skill-name has-text-centered">
                  Web
                </div>
                <div className="column">
                  <span data-tip="HTML">
                    <span className="skill-icon">
                      <i class="fab fa-html5"></i>
                    </span>
                  </span>
                  <ReactTooltip />
                  <span data-tip="CSS">
                    <span className="skill-icon">
                      <i class="fab fa-css3"></i>
                    </span>
                  </span>
                  <ReactTooltip />
                  <span data-tip="Javascript">
                    <span className="skill-icon">
                      <i class="fab fa-js"></i>
                    </span>
                  </span>
                  <ReactTooltip />
                  <span data-tip="React JS">
                    <span className="skill-icon">
                      <i class="fab fa-react"></i>
                    </span>
                  </span>
                  <ReactTooltip />
                  <span data-tip="Node JS">
                    <span className="skill-icon">
                      <i class="fab fa-node"></i>
                    </span>
                  </span>
                  <ReactTooltip />
                </div>
              </div>
              <div className="columns is-vcentered">
                <div className="column is-3 is-offset-1 skill-name has-text-centered">
                  DB & OS
                </div>
                <div className="column">
                  <span data-tip="SQL">
                    <span className="skill-icon">
                      <i class="fas fa-database"></i>
                    </span>
                  </span>
                  <ReactTooltip />
                  <span data-tip="MongoDB">
                    <span className="skill-icon">
                      <i class="fab fa-envira"></i>
                    </span>
                  </span>
                  <ReactTooltip />
                  <span data-tip="Linux">
                    <span className="skill-icon">
                      <i class="fab fa-linux"></i>
                    </span>
                  </span>
                  <ReactTooltip />
                </div>
              </div>
              <div className="columns is-vcentered">
                <div className="column is-3 is-offset-1 skill-name has-text-centered">
                  Others
                </div>
                <div className="column">
                  <span data-tip="Android">
                    <span className="skill-icon">
                      <i class="fab fa-android"></i>
                    </span>
                  </span>
                  <ReactTooltip />
                  <span data-tip="Flask">
                    <span className="skill-icon">
                      <i class="far fa-file-code"></i>
                    </span>
                  </span>
                  <ReactTooltip />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Profile;
