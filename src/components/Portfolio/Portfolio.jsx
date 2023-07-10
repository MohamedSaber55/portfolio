import React from 'react'
import "./portfolio.css"
import filmoonImg from "./../../assets/filmoon.jpeg"
import freshcartImg from "./../../assets/freshcart.jpeg"
import gameoverImg from "./../../assets/gameover.jpeg"
import foodsImg from "./../../assets/foods.jpeg"
import weatherImg from "./../../assets/weather.jpeg"
import downtubeImg from "./../../assets/downtube.jpeg"
import todolistImg from "./../../assets/todolist.jpeg"
import egyptionpartyImg from "./../../assets/egyptionparty.jpeg"

const data = [
    {
        id: 1,
        image: freshcartImg,
        title: "FreshCart E-Commerce Project",
        github: "https://github.com/MohamedSaber55/ecommerce-fe",
        demo: "https://ecommerce-fe-mohamedsaber.vercel.app"
    },
    {
        id: 2,
        image: filmoonImg,
        title: "Filmoon Movies Project",
        github: "https://github.com/MohamedSaber55/Movies-TVs-Project",
        demo: "https://mohamedsaber55.github.io/Movies-TVs-Project/"
    },
    {
        id: 3,
        image: weatherImg,
        title: "Weather Project",
        github: "https://github.com/MohamedSaber55/Weather-App",
        demo: "https://mohamedsaber55.github.io/Weather-App/"
    },
    {
        id: 4,
        image: gameoverImg,
        title: "GameOver Games Project",
        github: "https://github.com/MohamedSaber55/Games-Project-by-React",
        demo: "https://mohamedsaber55.github.io/Games-Project-by-React/#/home"
    },
    {
        id: 5,
        image: foodsImg,
        title: "Foods & Recipes JQuery Project",
        github: "https://github.com/MohamedSaber55/FoodsAPP",
        demo: "https://mohamedsaber55.github.io/FoodsAPP/"
    },
    {
        id: 6,
        image: todolistImg,
        title: "ToDoList Project",
        github: "https://github.com/MohamedSaber55/To-Do-App",
        demo: "https://mohamedsaber55.github.io/To-Do-App/"
    },
    {
        id: 7,
        image: downtubeImg,
        title: "DownTube Video Downloader",
        github: "https://github.com/MohamedSaber55/Youtube-Video-Downloader",
        demo: "https://mohamedsaber55.github.io/Youtube-Video-Downloader/"
    },
    {
        id: 8,
        image: egyptionpartyImg,
        title: "Egyptian Party JQuery Project",
        github: "https://github.com/MohamedSaber55/Jquery-App",
        demo: "https://mohamedsaber55.github.io/Jquery-App/"
    },
]


const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Resent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {data?.map(item => (
                    <article key={item.id} className="portfolio__item">
                        <div className="portfolio__item-image">
                            <img src={item.image} alt="" />
                        </div>
                        <h3>{item.title}</h3>
                        <div className="portfolio__item-cta">
                            <a href={item.github} className="btn" target="_blank" rel="noreferrer">Github</a>
                            <a href={item.demo} className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
                        </div>
                    </article>))}
            </div>
        </section>
    )
}

export default Portfolio