import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='text-white'>
      <footer className="p-10 font-medium text-white bg-gray-900 footer">
        <nav>
          <h6 className="text-white footer-title">Location</h6>
          <p className="text-white">No 310,</p>
          <p className="text-white">Main Street</p>
          <p className="text-white">Gampola</p>
          <p className="text-white">Tel: +94 77 777 4277</p>
          <p className="text-white">Email: smartgsmsolutions@gmail.com</p>
        </nav>
        <nav>
          <h6 className="text-white footer-title">Links</h6>
          <Link className="text-white link link-hover" to="/">Home</Link>
          <Link className="text-white link link-hover" to="/contact">Contact</Link>
          <Link className="text-white link link-hover" to="/services">Services</Link>
          <Link className="text-white link link-hover" to="/about">About us</Link>
        </nav>
        <nav>
          <h6 className="text-white footer-title">Legal</h6>
          <a className="text-white link link-hover">Terms of use</a>
          <a className="text-white link link-hover">Privacy policy</a>
          <a className="text-white link link-hover">Cookie policy</a>
        </nav>
      </footer>

      <div className="items-center">
        <footer className="p-4 text-white bg-gray-900 footer footer-center">
          <aside>
            <p>
              All Rights Reserved | Smart GSM Solutions (Pvt) Ltd | Designed & Developed by Silicon Radon Networks (Pvt) Ltd
            </p>
          </aside>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
