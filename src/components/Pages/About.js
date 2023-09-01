import React, { Component } from "react";
import Header from "../Common/Header";
import image from "../assets/img/about.jpg";

import img1 from '../assets/img/about/1.jpg';
import img2 from '../assets/img/about/2.jpg';
import img3 from '../assets/img/about/3.jpg';
import img4 from '../assets/img/about/4.jpg';

const about = [
    { image: img1, period: "2009-2011", event: "Our Humble Beginnings", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!" },
    { image: img2, period: "March 2011", event: "An Agency is Born", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!" },
    { image: img3, period: "December 2015", event: "Transition to Full Service", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!" },
    { image: img4, period: "July 2020", event: "Phase Two Expansion", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!" }
];

class About extends Component {
    render() {
        return (
            <div>
                <Header
                    title="Bienvenue dans notre Studio!"
                    subtitle="C'est bien de vous retrouvez"
                    buttonText="Tell me more"
                    link="/services"
                    showButton={true}
                    image={image}
                />
                <section className="page-section" id="about">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">About</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        <ul className="timeline">
                            {about.map((item, index) => (
                                <li key={index} className={index % 2 === 0 ? "" : "timeline-inverted"}>
                                    <div className="timeline-image">
                                        <img className="rounded-circle img-fluid" src={item.image} alt="..." />
                                    </div>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <h4>{item.period}</h4>
                                            <h4 className="subheading">{item.event}</h4>
                                        </div>
                                        <div className="timeline-body">
                                            <p className="text-muted">{item.description}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                            <li className="timeline-inverted">
                                <div className="timeline-image">
                                    <h4>
                                        Be Part
                                        <br />
                                        Of Our
                                        <br />
                                        Story!
                                    </h4>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        );
    }
}

export default About;
