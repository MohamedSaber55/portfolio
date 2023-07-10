import React from 'react'
import "./header.css"
import { CTA } from './CTA.jsx'
import me from "./../../assets/me.png"
import HeaderSocials from './HeaderSocials.jsx'
// import { BsChevronDoubleDown, BsChevronDoubleRight } from 'react-icons/bs'

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Mohamed Saber</h1>
                <h5 className="text-light">Full-Stack Developer</h5>
                <CTA />

                <div className="me">
                    <img src={me} alt="" />
                </div>
                <HeaderSocials />

                <a href="#contact" className="scroll__down"> Scroll Down</a>
            </div>
        </header>
    )
}

export default Header