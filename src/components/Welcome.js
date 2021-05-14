import React from "react";
import WOW from "wowjs";
import { SocialIcon } from "react-social-icons";

class Welcome extends React.Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
      <section className="hero is-fullheight" id="intro">
        <div className="hero-body">
          <div className="columns is-vcentered">
            <div className="column is-6 left-welcome">
              <img src="/images/aboutme.png" alt="portfolio-img"></img>
              <div
                className="buttons is-centered wow animate__animated animate__fadeInDown"
                data-wow-delay=".5s"
              >
                <a
                  className="button is-rounded is-fullwidth"
                  id="cvbtn"
                  target="_blank"
                  href="https://bit.ly/mathanresume"
                  rel="noopener noreferrer"
                >
                  <span class="icon is-small">
                    <i class="fa fa-link"></i>
                  </span>
                  <span>Resume</span>
                </a>
              </div>
            </div>
            <div className="column is-6" id="colright">
              <h1 className="dash">Mathan's Folio</h1>
              <form className="wow animate__animated animate__fadeInRight">
                <fieldset disabled>
                  <div className="field">
                    <label className="label">Glimpses</label>
                    <article class="message is-dark">
                      <div class="message-body">
                        A passionate individual who entered the arena of
                        Computer Science by waving at Hello World programs and
                        still survives with the help of strong Technical
                        skillsets in Full Stack Web and Mobile Development
                      </div>
                    </article>
                  </div>
                  <div className="field">
                    <label className="label">Position</label>
                    <article class="message is-dark">
                      <div class="message-body">SDE Intern at Flipkart</div>
                    </article>
                  </div>
                  <div className="field social-icon-div">
                    {/* <label className="label">Social</label> */}
                    <SocialIcon
                      className="socialicon"
                      url="mailto:capturesmk@gmail.com"
                      bgColor="black"
                    />
                    <SocialIcon
                      className="socialicon"
                      url="https://github.com/capturemathan"
                      bgColor="black"
                    />
                    <SocialIcon
                      className="socialicon"
                      url="https://www.linkedin.com/in/mathana-kumar-s-87b42714a/"
                      bgColor="black"
                    />
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Welcome;
