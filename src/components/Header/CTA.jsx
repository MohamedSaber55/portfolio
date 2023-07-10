import React from 'react'
import cv from "./../../assets/myCV.pdf"
export const CTA = () => {
    return (
        <div className="cta">
            <a href={cv} download className='btn'>DownLoad CV</a>
            <a href="#contact" className="btn btn-primary">Let's Connect</a>
        </div>
    )
}
