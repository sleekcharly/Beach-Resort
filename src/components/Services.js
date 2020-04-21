import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "free cocktails",
                info: 'Duis minim ex qui irure ipsum minim ex qui irure!'
            },
            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                info: 'Duis minim ex qui irure ipsum minim ex qui irure!'
            },
            {
                icon: <FaShuttleVan />,
                title: "Free Shuttle",
                info: 'Duis minim ex qui irure ipsum minim ex qui irure!'
            },
            {
                icon: <FaBeer />,
                title: "Strongest Beer",
                info: 'Duis minim ex qui irure ipsum minim ex qui irure!'
            },
        ]
    }
    render() {
        return (
            <section className='services'>
                <Title title='Services' />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        );
                    })}
                </div>
            </section>
        )
    }
}
