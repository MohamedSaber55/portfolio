import React from 'react'
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTelegram, BsWhatsapp } from "react-icons/bs"

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/mohamed-saber-562149218/" target="_blank" rel="noreferrer" className="">
                <BsLinkedin />
            </a>
            <a href="https://github.com/MohamedSaber55" target="_blank" rel="noreferrer" className="">
                <BsGithub />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100014025102184" target="_blank" rel="noreferrer" className="">
                <BsFacebook />
            </a>
            <a href="https://www.instagram.com/mo_saber5" target="_blank" rel="noreferrer">
                <BsInstagram />
            </a>
            <a href="https://api.whatsapp.com/send?phone=01210529969" target="_blank" rel="noreferrer">
                <BsWhatsapp />
            </a>
            <a href="https://t.me/Mo7amed_Saber3" target="_blank" rel="noreferrer">
                <BsTelegram />
            </a>
        </div>
    )
}

export default HeaderSocials