import React from 'react'
import "./testimonials.css"
import img1 from "./../../assets/Saber.jpg"
// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
    {
        avatar: img1,
        name: 'Mohamed Saber',
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero obcaecati modi pariatur laborum explicabo maiores."
    },
    {
        avatar: img1,
        name: 'Mohamed Saber',
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero obcaecati modi pariatur laborum explicabo maiores."
    },
    {
        avatar: img1,
        name: 'Mohamed Saber',
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero obcaecati modi pariatur laborum explicabo maiores."
    },
    {
        avatar: img1,
        name: 'Mohamed Saber',
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero obcaecati modi pariatur laborum explicabo maiores."
    },
]

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>
            <Swiper
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
                className="container testimonials__container">
                {testimonials?.map((testimonial, i) => (
                    <SwiperSlide key={i} className="testimonial">
                        <div className="client__avatar">
                            <img src={testimonial.avatar} alt="Avatar one" />
                        </div>
                        <h5 className="client__name">{testimonial.name}</h5>
                        <small className="client__review">{testimonial.review}</small>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Testimonials