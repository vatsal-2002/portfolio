import React from 'react';
import { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';

export const Experience = () => {
    const toRotate = ["saleshandy"];
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className="experience" id="experience">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Fade bottom>
                            <h2>Experience</h2>
                        </Fade>
                        <Fade bottom delay={500}>
                            <div className="experience-content-wrapper">
                                <div className="experience-content">
                                    <h1><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Saleshandy" ]'><span className="wrap">{text}</span></span></h1>
                                    <p><strong>Full Stack Developer</strong></p>
                                    <p><strong>Start Date:</strong> December 2023</p>
                                    <p><strong>End Date:</strong> July 2024</p>
                                    <p><strong>Responsibilities:</strong></p>
                                    <p>Performed frontend tasks in live projects.</p>
                                    <p>Created two projects which are mentioned in the project section.</p>
                                </div>
                                <div className="experience-image">
                                    <img src="https://img.freepik.com/premium-vector/cartoon-man-working-laptop_835197-5827.jpg" alt="Work" />
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
};
