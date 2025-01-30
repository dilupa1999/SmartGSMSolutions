import React from 'react'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div>
        <footer className="p-10 font-medium bg-black footer text-base-content">
          
  <nav>
    <h6 className="footer-title ">Location</h6>
    <a className="link link-hover">No 310,</a>
    <a className="link link-hover">Katugastota Road,</a>
    <a className="link link-hover">Kandy, Srilanka,</a>
    <a className="link link-hover">Tel :- +94776059293</a>
    <a className="link link-hover">Email :- avstore@gmail.com</a>
  </nav>
  <nav>
    <h6 className="footer-title ">Link</h6>
    <Link className="link link-hover" to="/">Home</Link>
    <Link className="link link-hover" to="/contact">Contact</Link>
    <Link className="link link-hover" to="/services">Services</Link>
    <Link className="link link-hover" to="/about">About us</Link>
</nav>
  <nav>
    <h6 className="footer-title ">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
<div className='items-center'>
<footer className="p-4 bg-gray-100 footer footer-center text-base-content">
  <aside>
    <p>
      Copyright © {new Date().getFullYear()} - © 2024 | All Right Reserved | AVI Store | Designed & Developed{' '}
      <a
        href="https://siliconradonnetworks.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:underline"
      >
        siliconradonnetworks.com
      </a>
    </p>
  </aside>
</footer>

</div>
    </div>
  )
}

export default Footer