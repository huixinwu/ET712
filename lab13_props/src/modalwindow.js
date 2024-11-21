import React from "react";
import './index.css'

const Modalwindow = function () {
    return (
        <>
            {/* Modal window */}
            <section className="modalwindow">
                <div className="modalcontent">
                    <header className="modalheader">
                        <p>Add Feedback</p>
                        <p>&#x58;</p>
                    </header>
                    <main className='modalbody'>
                        <input placeholder='Type your comments...' className='commentarea' />
                        <button className="btnpostfeedback">Post Feedback</button>
                    </main>
                </div>
            </section>
        </>
    )
}

export default Modalwindow