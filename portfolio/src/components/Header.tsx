import React from "react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <div className="d-flex gap-3 p-3">
      <Link to="/" className="btn ">
        Home
      </Link>
      <Link to="/about" className="btn ">
        About Me
      </Link>
      <Link to="/projects" className="btn ">
        Projects
      </Link>
      <Link to="/blog" className="btn ">
        Blog
      </Link>
    </div>
  );
};
