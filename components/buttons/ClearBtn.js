import { useState } from "react"

const ClearBtn = (props) => {
    const [clearDown, setCD] = useState(false);
    const handleClearDown = () => {
        setCD(true)
    }
    const handleClearUp = () => {
        setCD(false)
    }

    return (
        <button
            className={clearDown ? "clear_btn down" : "clear_btn"}
            onClick={props.clickLogic}
            onMouseDown={() => handleClearDown()}
            onMouseUp={() => handleClearUp()}
    >
        <ion-icon name="close-outline" className="remove_btn"></ion-icon>
    </button>
    )
}

export default ClearBtn