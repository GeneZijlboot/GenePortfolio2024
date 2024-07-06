import React, { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect/dist/core';
import '../styling/frontpage.scss';

function frontpage() {
    const typewriterRef = useRef(null);

    useEffect(() => {
        if (typewriterRef.current) {
            new Typewriter(typewriterRef.current, {
                strings: ['Full Stack Developer', 'MERN-Stack Developer', 'Coffee enthusiast'],
                autoStart: true,
                loop: true,
            });
        }
    }, []);

    return (
        <div className="frontpage">
            <div className="row">
                <div className="col-md-8">
                    <div className="textbox">
                        <div className="text">Hi there!</div>
                        <div className="name">I'm <span style={{ color: '#377747' }}>Gene Zijlmans</span></div>
                        <div className="function">
                            <span ref={typewriterRef}></span>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                     <div className="picture"></div>
                </div>
            </div>

        </div>
    )
}

export default frontpage
  