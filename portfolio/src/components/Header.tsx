import React from 'react'
import { Link } from 'react-router-dom'

export const Header: React.FC = () => {
  return (
    <div className="d-flex gap-3 p-3">
      <Link to="/" className="btn btn-secondary">Home</Link>
      <Link to="/about" className="btn btn-secondary">About Me</Link>
      <Link to="/projects" className="btn btn-secondary">Projects</Link>
      <Link to="/blog" className="btn btn-secondary">Blog</Link>
    </div>
  )
}
