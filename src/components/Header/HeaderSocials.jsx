import React from 'react'
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTelegram, BsWhatsapp } from "react-icons/bs"

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/mohamedsaber5050/" target="_blank" rel="noreferrer" className="">
                <BsLinkedin />
            </a>
            <a href="https://github.com/MohamedSaber55" target="_blank" rel="noreferrer" className="">
                <BsGithub />
            </a>
            <a href="https://www.facebook.com/mo7amedsaber5050/" target="_blank" rel="noreferrer" className="">
                <BsFacebook />
            </a>
            <a href="https://www.instagram.com/mo7amedsaber5050" target="_blank" rel="noreferrer">
                <BsInstagram />
            </a>
            <a href="https://api.whatsapp.com/send?phone=+201210529969" target="_blank" rel="noreferrer">
                <BsWhatsapp />
            </a>
            <a href="https://t.me/https://t.me/Mo7md_Saber" target="_blank" rel="noreferrer">
                <BsTelegram />
            </a>
        </div>
    )
}

export default HeaderSocials