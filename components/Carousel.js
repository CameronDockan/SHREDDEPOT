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

      const [leftDown, setLD] = useState(false)
      const [rightDown, setRD] =useState(false)

      const handleLeftDown = () => {
        setLD(true)
      }

      const handleLeftUp = () => {
        setLD(false)
      }

      const handleRightDown = () => {
        setRD(true)
      }

      const handleRightUp = () => {
        setRD(false)
      }



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
            <button 
                className={leftDown ? "carousel_button mDown" : "carousel_button" }
                id="carousel_button_left" 
                onClick={() => decrementIndeks()}
                onMouseDown={() => handleLeftDown()}
                onMouseUp={() => handleLeftUp()}
                >
                <svg width="35" height="30" viewBox="0 0 35 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.585786 13.5858C-0.195262 14.3668 -0.195262 15.6332 0.585786 16.4142L13.3137 29.1421C14.0948 29.9232 15.3611 29.9232 16.1421 29.1421C16.9232 28.3611 16.9232 27.0948 16.1421 26.3137L4.82843 15L16.1421 3.68629C16.9232 2.90524 16.9232 1.63891 16.1421 0.857864C15.3611 0.0768158 14.0948 0.0768158 13.3137 0.857864L0.585786 13.5858ZM35 13H2V17H35V13Z" fill="bisque"/>
                </svg>
            </button>
            <button 
                className={rightDown ? "carousel_button mDown" : "carousel_button" }
                id="carousel_button_right" 
                onClick={() => incrementIndeks()}
                onMouseDown={() => handleRightDown()}
                onMouseUp={() => handleRightUp()}
                >
                <svg width="35" height="30" viewBox="0 0 35 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M34.4142 16.4142C35.1953 15.6332 35.1953 14.3668 34.4142 13.5858L21.6863 0.857864C20.9052 0.0768158 19.6389 0.0768158 18.8579 0.857864C18.0768 1.63891 18.0768 2.90524 18.8579 3.68629L30.1716 15L18.8579 26.3137C18.0768 27.0948 18.0768 28.3611 18.8579 29.1421C19.6389 29.9232 20.9052 29.9232 21.6863 29.1421L34.4142 16.4142ZM-1.78814e-07 17L33 17V13L-1.78814e-07 13V17Z" fill="bisque"/>
                </svg>
            </button>
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