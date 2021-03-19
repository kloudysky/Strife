import React from "react";
import { Link } from "react-router-dom";

const Splash = ({ currentUser, logout }) => {
  const sessionLinks = () => <Link to="/login">Login</Link>;

  const loggedIn = () => <Link to="/channels">Open Strife</Link>;

  return (
    <div className="splash-container">
      <div className="first-section">
        <div className="first-section-bg">
          <img
            className="first-section-bg-bg"
            src="https://discord.com/assets/d70fa33128cb72c4092abac7a0d25ed2.svg"
            alt=""
          />
          <img
            className="first-section-bg-bg-2"
            src="https://discord.com/assets/edaebb01cd24df779f6feae9a34bd7d8.svg"
            alt=""
          />
          <img
            className="first-section-bg-img-left"
            src="https://discord.com/assets/e92fcc9ab6e63c1a17e954af347a1f1d.svg"
            alt=""
          />
          <img
            className="first-section-bg-img-right"
            src="https://discord.com/assets/7b01f72a2054561145b6dd04add417c0.svg"
            alt=""
          />
        </div>
        <div className="header-section">
          <nav>
            <span className="logo-span">STRIFE</span>
            <div className="nav-collapse">
              <a className="nav-link" href="">
                Download
              </a>
              <a className="nav-link" href="">
                Why Strife
              </a>
              <a className="nav-link" href="">
                Dynamite
              </a>
              <a className="nav-link" href="">
                Saftey
              </a>
              <a className="nav-link" href="">
                Support
              </a>
            </div>
            <button className="splash-button">
              {currentUser ? loggedIn() : sessionLinks()}
            </button>
          </nav>
        </div>
        <div className="strife-intro">
          <h1>Your place to bond</h1>
          <p>
            Whether you’re part of a school club, gaming group, worldwide art
            community, or just a handful of friends that want to spend time
            together, Discord makes it easy to talk every day and hang out more
            often.
          </p>
        </div>
      </div>
      <div className="second-section">
        {/* <div className="second-section-image"></div> */}
        <div className="second-section-img-container">
          <img
            className="second-section-img"
            src="https://discord.com/assets/c01c644bc9fa2a28678ae2f44969d248.svg"
            className="second-section-img"
          />
        </div>
        <div className="second-section-caption">
          <h1>An invite only place to have plenty of sincere conversations</h1>
          <p>
            Discord servers are organized into topic-based channels where you
            can collaborate, share, and just talk about your day without
            clogging up a group chat.
          </p>
        </div>
      </div>
      <div className="second-section">
        <div className="second-section-caption">
          <h1>Where it feels like you're all really together</h1>
          <p>
            Grab a seat in a voice channel when you’re free. Friends in your
            server can see you’re around and instantly pop in to talk without
            having to call.
          </p>
        </div>
        <img
          className="second-section-img"
          src="https://discord.com/assets/98c9edf635a98377ec579aaa19ed47be.svg"
          alt=""
        />
      </div>
      <div className="second-section">
        <div className="second-section-img"></div>
        <img
          src="https://discord.com/assets/9184fcadc2e3c84650dd4b075850d3d6.svg"
          alt=""
        />
        <div className="second-section-caption">
          <h1>From a few to a crew</h1>
          <p>
            Get a community of any size running with moderation tools and custom
            member access. Give members special powers, set up private channels,
            and more.
          </p>
        </div>
      </div>
      <div className="fifth-section">
        <div className="fifth-section-caption">
          <h1>Rely on us to build the best tech for you to stay close</h1>
          <p>
            Low-latency voice and video feels like you’re in the same room. Wave
            hello over video, watch friends stream their games, or gather up and
            have a drawing session with screen share.
          </p>
        </div>
        <img
          src="https://discord.com/assets/f61264d792fd2556a618c95d97b5de07.svg"
          alt=""
        />
        <div className="fifth-section-image"></div>
      </div>
      <div className="call-to-action-box">
        <h1>Ready to start your journey?</h1>
        <button className="call-to-action">Download</button>
      </div>
      <div className="footer">
        <h1>Links!</h1>
      </div>
    </div>
  );
};

export default Splash;
