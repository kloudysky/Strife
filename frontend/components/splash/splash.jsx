import React from "react";
import { Link } from "react-router-dom";

const Splash = ({ currentUser, logout }) => {
  const sessionLinks = () => <Link to="/login">Login</Link>;

  const loggedIn = () => <Link to="/channels">Open Strife</Link>;

  return (
    <div className="splash-container">
      <div className="first-section">
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
        <div className="second-section-image">Image box placeholder</div>
        <div className="second-section-caption">
          <h1>An invite only place to have plenty of sincere conversations</h1>
          <p>
            Discord servers are organized into topic-based channels where you
            can collaborate, share, and just talk about your day without
            clogging up a group chat.
          </p>
        </div>
      </div>
      <div className="third-section">
        <div className="third-section-caption">
          <h1>Where it feels like you're all really together</h1>
          <p>
            Grab a seat in a voice channel when you’re free. Friends in your
            server can see you’re around and instantly pop in to talk without
            having to call.
          </p>
        </div>
        <div className="third-section-image">Image box placeholder</div>
      </div>
      <div className="fourth-section">
        <div className="fourth-section-image">Image box placeholder</div>
        <div className="fourth-section-caption">
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
        <div className="fifth-section-image">Image box placeholder</div>
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
