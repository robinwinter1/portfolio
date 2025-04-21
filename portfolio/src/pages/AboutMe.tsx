import React from "react";

export const AboutMePage: React.FC = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4">About Me</h1>
        <p className="lead">Get to know more about me.</p>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Hello, I'm Ju Yeong.</h5>
              <p className="card-text mt-3">
                <li>
                  I am a web developer who does fullstack development.
                </li>
              </p>
              <h5 className="card-title">I am a workaholic.</h5>
              <p className="card-text mt-3">
                <li>I find great fulfillment when I work.</li>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
