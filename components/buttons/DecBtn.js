import { useState } from "react"

const DecBtn = (props) => {

    const [decDown, setDD] = useState(false)

    const handleDecDown = () => {
        setDD(true)
    }
    const handleDecUp = () => {
        setDD(false)
    }

    return (
        <button 
            className={decDown ? "decrement_btn down" : "decrement_btn"}
            onClick={props.clickLogic}
            onMouseDown={() => handleDecDown()}
            onMouseUp={() => handleDecUp()}
        >
            <ion-icon name="remove-outline" className="decrement_btn_icon"></ion-icon>
        </button>
    )
}

export default DecBtn