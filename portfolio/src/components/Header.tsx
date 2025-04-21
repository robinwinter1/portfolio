import React from "react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <div className="d-flex gap-3 p-3">
      <Link to="/" className="btn text-white">
        Home
      </Link>
      <Link to="/about" className="btn text-white">
        About Me
      </Link>
      <Link to="/projects" className="btn text-white">
        Projects
      </Link>
      <Link to="/blog" className="btn text-white">
        Blog
      </Link>
    </div>
  );
};
