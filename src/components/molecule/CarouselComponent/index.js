import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'
import { Polkadot } from '../../../configs/Images';

function CarouselComponent(props) {
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            src: "https://source.unsplash.com/random"
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            src: "https://source.unsplash.com/random"
        }
    ]

    return (
        <>
            <Carousel animation="slide" className={"rounded-3xl relative"} >
                {
                    items.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>
            <img src={Polkadot} className="absolute md:top-36 md:-left-32  top-24 -left-20 md:w-48 w-32" style={{ zIndex: -1 }} />
            <img src={Polkadot} className="absolute md:bottom-14 md:right-14  bottom-16 right-0 w-32" style={{ zIndex: -1 }} />
        </>
    )
}

function Item(props) {
    return (
        <Paper className={"justify-items-center h-96"} >
            <img className={"w-full"} src={props.item.src} />
        </Paper>
    )
}

export default CarouselComponent