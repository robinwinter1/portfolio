import React from "react";

export const AboutMePage: React.FC = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4">About Me</h1>
        <p className="lead">Get to know more about who I am and what I do.</p>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Hey, I'm Ju Yeong 👋</h5>
              <p className="card-text">
                I'm a passionate and driven web developer with a deep love for
                building intuitive, user-friendly web applications. Over the
                years, I've honed my skills in both frontend and backend
                development, making me a well-rounded full-stack developer.
              </p>
              <p className="card-text">
                I specialize in crafting responsive web interfaces with modern
                technologies like React, TypeScript, and Tailwind CSS, and I
                also enjoy building scalable backend services using Node.js,
                Express, and databases like MongoDB or PostgreSQL.
              </p>
              <p className="card-text">
                When I'm not coding, I'm probably learning something new,
                sipping on coffee, or planning my next side project. I'm a
                strong believer in continuous growth, collaboration, and clean
                code.
              </p>
              <p className="card-text">
                Let’s build something awesome together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
