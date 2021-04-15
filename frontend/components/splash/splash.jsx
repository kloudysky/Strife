import React from "react";
import { Link } from "react-router-dom";

const Splash = ({ currentUser, logout }) => {
  const sessionLinks = () => <Link to="/login">Login</Link>;

  const loggedIn = () => <Link to="/channels">Open Strife</Link>;

  return (
    <div className="splash-container">
      <div className="first-section first-section-bg">
        <div className="grid-s3 header-view header-color">
          <header className="nav nav-desktop">
            <nav className="nav-bar">
              <a aria-label="Home" href="/" className="nav-logo">
                STRIFE
              </a>
              <div className="nav-links">
                <a className="nav-link" href="#">
                  Download
                </a>
                <a className="nav-link" href="#">
                  Why Strife?
                </a>
                <a className="nav-link" href="#">
                  Dynamite
                </a>
                <a className="nav-link" href="#">
                  Saftey
                </a>
                <a className="nav-link" href="#">
                  Support
                </a>
              </div>
              <div className="btn-login-wrapper"></div>
              <a className="btn btn-white btn-small btn-wrap">
                {currentUser ? loggedIn() : sessionLinks()}
              </a>
            </nav>
          </header>
          <header className="nav nav-mobile">
            <nav className="nav-bar">
              <a aria-label="Home" href="/" className="nav-logo">
                STRIFE
              </a>
              <div className="nav-collapse">
                <a
                  href=""
                  className="btn btn-white btn-small btn-wrap btn-mobile"
                >
                  Login
                </a>
                <button className="btn-menu" aria-hidden="false">
                  <svg width="40" height="40" viewBox="0 0 40 40">
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M33.3327 10H6.66602V15H33.3327V10ZM6.66602 18.3317H33.3327V23.3317H6.66602V18.3317ZM6.66602 26.665H33.3327V31.665H6.66602V26.665Z"
                    ></path>
                  </svg>
                </button>
              </div>
            </nav>
          </header>
        </div>
        <div className="grid-s3 cta-container">
          <div className="cta-body">
            <div className="cta-text">
              <h1>Strife - A Synonym For Discord</h1>
              <div className="cta-p">
                Connection is so important for society and can make the world a
                happier place. For that reason, I cloned Discord as a class
                project.
              </div>
            </div>
            <div className="cta-btns">
              <a href="#" className="cta-btn">
                LinkedIn
              </a>
              <a href="#" className="cta-btn">
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="header-images">
          <img
            src="https://discord.com/assets/11ebd3cd1712fe17b647d846559d7559.svg"
            class="bg-img s1"
            alt=""
          ></img>
          <img
            src="https://discord.com/assets/d70fa33128cb72c4092abac7a0d25ed2.svg"
            class="bg-img s2"
            alt=""
          ></img>
          <img
            src="https://discord.com/assets/7df86467c3079db32f8a48aeadc450ca.svg"
            class="bg-img s3"
            alt=""
          ></img>
          <img
            src="https://discord.com/assets/6623b6310d590ec9be669189f4aa813a.svg"
            class="bg-img s4"
            alt=""
          ></img>
          <img
            src="https://discord.com/assets/4bdac631250f5f9e8a4b928d5efa22c8.svg"
            class="bg-img i2"
            alt=""
          ></img>
          <img
            src="https://discord.com/assets/94acf432b564660994742251c2a5f222.svg"
            class="bg-img i1"
            alt=""
          ></img>
          <img
            src="https://discord.com/assets/1d9b04db64569bf18409a59a32ffd256.svg"
            class="bg-img c4"
            alt=""
          ></img>
          <img
            src="https://discord.com/assets/beb557bf6fce2373c59accc0931c9567.svg"
            class="bg-img c5"
            alt=""
          ></img>
          <img
            src="https://discord.com/assets/690c2345bcaaaa50b71548231a26b696.svg"
            class="bg-img c22"
            alt=""
          ></img>
          <img
            src="https://discord.com/assets/092d86847152cc1297e50ac02e28baf5.svg"
            class="bg-img c1"
            alt=""
          ></img>
          <img
            src="https://discord.com/assets/690c2345bcaaaa50b71548231a26b696.svg"
            class="bg-img c2"
            alt=""
          ></img>
          <img
            src="https://discord.com/assets/5fadc604cb12da892e196e6dbf20e2a6.svg"
            class="bg-img c3"
            alt=""
          ></img>
          <img
            src="https://discord.com/assets/7ed9683436331d4a3434ca9fa64b5859.svg"
            class="bg-img c6"
            alt=""
          ></img>
          <img
            src="https://discord.com/assets/f8c67d821e5f44619258319a4ecdf84d.svg"
            class="bg-img c7"
            alt=""
          ></img>
          <img
            src="https://discord.com/assets/6e95d39708991a81004b77a5282160c6.svg"
            class="bg-img c9"
            alt=""
          ></img>
          <img
            src="https://discord.com/assets/5cc3db60569965c8bd92a05f6cb09b8d.svg"
            class="bg-img d2"
            alt=""
          ></img>
          <img
            src="https://discord.com/assets/31fde13d3508b8ddb01cf817ad09c690.svg"
            class="bg-img sh2"
            alt=""
          ></img>
          <img
            src="https://discord.com/assets/a6f749bbe52f6e75c8735c5075bfc4a4.svg"
            class="bg-img cc"
            alt=""
          ></img>
          <img
            src="https://discord.com/assets/fb628c7d1e7b604e841e10e289148659.svg"
            class="bg-img c8"
            alt=""
          ></img>
          <img
            src="https://discord.com/assets/9c0629769616f9629689a0e68a2e57b7.svg"
            class="bg-img c10"
            alt=""
          ></img>
          <img
            src="https://discord.com/assets/edaebb01cd24df779f6feae9a34bd7d8.svg"
            class="bg-bldgs"
            alt=""
          ></img>
          <img
            src="https://discord.com/assets/e92fcc9ab6e63c1a17e954af347a1f1d.svg"
            class="fg-left"
            alt=""
          ></img>
          <img
            src="https://discord.com/assets/7b01f72a2054561145b6dd04add417c0.svg"
            class="fg-right"
            alt=""
          ></img>
        </div>
      </div>
      <div>
        <div className="grid-s4">
          <div className="second-section content-container img-left-1 visibility">
            <img
              className="second-section-img f-img"
              src="https://discord.com/assets/c01c644bc9fa2a28678ae2f44969d248.svg"
            />
            <div className="section-caption">
              <h2 className="section-h2">
                An invite only place to have plenty of sincere conversations
              </h2>
              <div className="section-text">
                Strife servers are organized into topic-based channels where you
                can collaborate, share, and just talk about your day without
                clogging up a group chat.
              </div>
            </div>
          </div>
        </div>
        <div className="section-br">
          <svg
            className="w1h"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
          >
            <path
              className="wph anip"
              d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div className="grid-s4 bg-grey">
          <div className="second-section content-container img-right-2 visibility">
            <img
              className="second-section-img f-img"
              src="https://discord.com/assets/98c9edf635a98377ec579aaa19ed47be.svg"
              alt=""
            />
            <div className="section-caption">
              <h1 className="section-h2">
                Where it feels like you're all really together
              </h1>
              <div className="section-text">
                Grab a seat in a voice channel when you’re free. Friends in your
                server can see you’re around and instantly pop in to talk
                without having to call.
              </div>
            </div>
          </div>
        </div>
        <div className="section-br inverted-br">
          <svg
            className="w1h"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
          >
            <path
              className="wph anip"
              d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div className="grid-s4">
          <div className="second-section content-container img-left-1 visibility">
            <img
              className="second-section-img f-img"
              src="https://discord.com/assets/9184fcadc2e3c84650dd4b075850d3d6.svg"
              alt=""
            />
            <div className="section-caption">
              <h2 className="section-h2">From a few to a crew</h2>
              <div className="section-text">
                Get a community of any size running with moderation tools and
                custom member access. Give members special powers, set up
                private channels, and more.
              </div>
            </div>
          </div>
        </div>
        <div className="section-br">
          <svg
            className="w1h"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
          >
            <path
              className="wph anip"
              d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div className="grid-s4 bg-grey">
          <div className="second-section content-container img-btm-2 lf-title visibility">
            <div className="section-caption">
              <h2 className="section-h2">
                Rely on us to build the best tech for you to stay close
              </h2>
              <div className="section-text">
                Low-latency voice and video feels like you’re in the same room.
                Wave hello over video, watch friends stream their games, or
                gather up and have a drawing session with screen share.
              </div>
            </div>
            <img
              className="second-section-img"
              src="https://discord.com/assets/f61264d792fd2556a618c95d97b5de07.svg"
              alt=""
            />
          </div>
        </div>
        <div className="grid-s4 bg-grey">
          <div className="second-section last-container cta-section">
            <div className="spkls">
              <img
                class="img-spkls"
                src="https://discord.com/asset/a188414ce83f2454b9d71a47c3d95909.svg"
                alt=""
              />
            </div>
            <h1>Ready to start your journey? Head to the real Discord!</h1>
            <button className="call-to-action">Download</button>
          </div>
        </div>
      </div>
      <div className="footer">
        <h1>Links!</h1>
      </div>
    </div>
  );
};

export default Splash;
