import { useState } from "react"

const IncBtn = (props) => {
    const [incDown, setID] = useState(false);

    const handleIncDown = () => {
        setID(true)
    }
    const handleIncUp = () => {
        setID(false)
    }

    return (
        <button
            className={incDown ? "increment_btn down" : "increment_btn"}
            onClick={props.clickLogic}
            onMouseDown={() => handleIncDown()}
            onMouseUp={() => handleIncUp()}
        >
            <ion-icon name="add-outline" className="increment_btn_icon"></ion-icon>
        </button>
    )
}

export default IncBtn