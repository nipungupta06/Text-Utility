import React, { useState } from 'react'

export default function About() {
    const [Mystyle, setMystyle] = useState(
        {
            color: "black",
            backgroundColor: "white"
        }
    )
    const [btntxt, setbtntxt] = useState("Enable Dark Mode")
    const toggleClick = () => {
        if (Mystyle.color === "black") {
            setMystyle({
                color: "white",
                backgroundColor: "black",
                border: "1px solid white"
            })
            setbtntxt("Enable Light Mode")
        }
        else {
            setMystyle({
                color: "black",
                backgroundColor: "white"
            })
            setbtntxt("Enable Dark Mode")
        }
    }
    return (
        <>
            <div className="accordion my-4" style={Mystyle} id="accordionExample">
                <div className="accordion-item" style={Mystyle}>
                    <h2 className="accordion-header" style={Mystyle}>
                        <button className="accordion-button"  style={Mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne"  style={Mystyle} className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={Mystyle}>
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={Mystyle}>
                    <h2 className="accordion-header" style={Mystyle}>
                        <button className="accordion-button"  style={Mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseOne"  style={Mystyle} className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={Mystyle}>
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={Mystyle}>
                    <h2 className="accordion-header" style={Mystyle}>
                        <button className="accordion-button"  style={Mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseOne"  style={Mystyle} className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={Mystyle}>
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                
            </div>
            <button className="btn btn-primary" onClick={toggleClick} type="submit">{btntxt}</button>
        </>
    )
}
