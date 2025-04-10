import React from "react";
import "./index.css"

const Modalwindow = function(props){
    // function to close modal window
    const closemodalwindow = function(){
        const modalwindow = document.querySelector(".modalwindow")
        modalwindow.style.display ="none"
    }

    return(
        <>
            {/* Modal window */}
            <section className="modalwindow">
                <div className="modalcontent">
                    <header className="modalheader">
                        <p>Add feedback</p>
                        <p className="closemodal" onClick={closemodalwindow }>&#x58;</p>
                    </header>
                    <main className="modalbody">
                        <input className="commentarea" type="text" placeholder="Type your comments"/>
                        <p className="description_comment">Max 200 characters</p>
                        <button className="btnpostfeedback">Post feedback</button>
                    </main>
                </div>
            </section>
        </>
    )

}

export default Modalwindow