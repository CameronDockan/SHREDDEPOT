"use client"
import Image from 'next/image'
import carouselItems from '/public/carouselData.js'
import pBC from '/public/images/pic_behind_carousel.png'
import {useState, useEffect} from 'react'



export default function Carousel () {

    const [list, setList] = useState(carouselItems)
    const [indeks, setIndeks] = useState(0)

    function changeListItemOpacity (index) {

        setIndeks(index)

        setList(list.map((item, i) => {
            if (i === index) {
                return {
                    ...item, 
                    navBtnClss: 'carousel_nav_btn current_slide',
                    slideOpacity: 1,
                }
            } else {
                return {
                    ...item, 
                    navBtnClss: 'carousel_nav_btn',
                    slideOpacity: 0,
                }
            }
        }))
    }

    function incrementIndeks () {
        if (indeks < carouselItems.length -1) setIndeks(prevIndeks => prevIndeks + 1)
        else setIndeks(0)
    }

    function decrementIndeks () {
        if (indeks > 0) setIndeks(prevIndeks => prevIndeks - 1)
        else setIndeks(carouselItems.length -1)
    }

    useEffect(() => {
        setList(list.map((item, i) => {
            if (i === indeks) {
                return {
                    ...item,
                    navBtnClss: 'carousel_nav_btn current_slide',
                    slideOpacity: 1,
                }
            } else {
                return {
                    ...item, 
                    navBtnClss: 'carousel_nav_btn',
                    slideOpacity: 0,
                }
            }
        }))
    }, [indeks])

    useEffect(() => {
        const interval = setInterval(() => {
            if(indeks < carouselItems.length - 1) setIndeks(indeks => indeks + 1)
            else setIndeks(0)
            console.log(indeks, carouselItems.length -1)
            setList(list.map((item, i) => {
                if (i === indeks) {
                    return {
                        ...item, 
                        navBtnClss: 'carousel_nav_btn current_slide',
                        slideOpacity: 1,                    }
                } else {
                    return {
                        ...item, 
                        navBtnClss: 'carousel_nav_btn',
                        slideOpacity: 0,
                    }
                }
            }))
        }, 5000);
        return () => clearInterval(interval);
      });

    const listItems_IMG = list.map((item) => {
        return (
                <li key={item.id}
                    className={item.clss}
                    style={{opacity: item.slideOpacity}}
                >
                    <Image  className={item.imgClss} 
                            src={item.imgSrc} alt={item.imgAlt} 
                            width={item.width} 
                            height={item.height} 
                            priority={true}
                    />
                    <h1>{item.description}</h1>
                </li>
        )
    })

    const navBtns = list.map((item, i) => {
        return (
            <button key={'s' + item.id} 
                    className={item.navBtnClss} 
                    id={item.navBtnID} 
                    onClick={() => changeListItemOpacity(i)}
            >
            </button>
        )
    })

    return (
        <div className="carousel">
            <button className="carousel_button" id="carousel_button_left" onClick={() => decrementIndeks()}>&#8592;</button>
            <button className="carousel_button" id="carousel_button_right" onClick={() => incrementIndeks()}>&#8594;</button>
            <div className="example">
                <Image 
                    className='example_img'
                    src={pBC} alt="blank"
                    priority={true}
                    />
            </div>

            <ul className="carousel_track">
            {listItems_IMG}
            </ul>
            <div className="carousel_nav">
                {navBtns}
            </div>
        </div>
    )
}