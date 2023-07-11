import React from 'react'
import "./footer.css"
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs'

const Footer = () => {
    return (
        <footer>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="" className="footer__logo">MSA</a>
            <ul className="permalinks">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                {/* <li><a href="#services">Services</a></li> */}
                <li><a href="#portfolio">Portfolio</a></li>
                {/* <li><a href="#testimonials">Testimonials</a></li> */}
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/mohamed-saber-562149218/" target="_blank" rel="noreferrer" className="">
                    <BsLinkedin />
                </a>
                <a href="https://github.com/MohamedSaber55" target="_blank" rel="noreferrer" className="">
                    <BsGithub />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100014025102184" target="_blank" rel="noreferrer" className="">
                    <BsFacebook />
                </a>
            </div>
            <div className="footer__copyright">
                <small>©copyright <span className="copyright__name">Mohamed Saber</span> . All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer