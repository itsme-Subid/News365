import "./About.css";
import React from "react";

function About() {
  return (
    <div className="about container">
      <h2>About</h2>
      <p>
        News365 is a simple, straightforward web app to see latest news. There are no bells and
        whistles, just a simple interface to see the latest news. It is built using ReactJS and
        NewsData.io API.
        <br /> You can also change mood of the web
        app to suit your eye sight. News365 is available for free on the web.
        News365 doesn't have any paid version that will gives you access to
        additional features, nor does it have any in-app purchases.
      </p>
      <div className="features">
        <h3>
          <div className="svg"></div>
          Features Overview:
        </h3>
        <li>Modern, intuitive user interface.</li>
        <li>Easy Access.</li>
        <li>Secure and Free.</li>
        <li>No In-App purchases.</li>
        <li>Available on the web.</li>
        <li>Always Latest news</li>
        <li>Dark Theme / Night mode.</li>
        <li>Beautiful interface.</li>
        <li>Separated by category.</li>
      </div>
      <div className="open-source">
        <h3>
          <div className="svg"></div>Open Source:
        </h3>
        <p>
          News365 is an open source project. You can find the source code
          on{" "}
          <a
            href="https://github.com/itsme-Subid/News365"
            target={"_blank"}
            rel="noreferrer"
          >
            GitHub.
          </a>
          <br />
          I'm currently using <strong>react.js</strong> to build News365.
        </p>
      </div>
      <div className="credits">
        <h3>
          <div className="svg"></div>Credits:
        </h3>
        <p>
          News365 is built by{" "}
          <a
            href="https://github.com/itsme-Subid"
            target={"_blank"}
            rel="noreferrer"
          >
            Subid
          </a>
          .<br />
          The icons used in News365 are from{" "}
          <a
            href="https://ionic.io/ionicons"
            target={"_blank"}
            rel="noreferrer"
          >
            Ionicons
          </a>
          .<br />
          The font used in News365 is from{" "}
          <a
            href="https://fonts.google.com/"
            target={"_blank"}
            rel="noreferrer"
          >
            Google Fonts
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default About;
