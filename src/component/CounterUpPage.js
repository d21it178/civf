import React from "react";
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger';
import { useState } from "react";
import './CounterUpPage.css';

const CounterUpPage = () => {
    const [counterOn, setCounterOn] = useState(false);

    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div className="c1">
                {counterOn && <CountUp start={0} end={485} duration={1} delay={0} />}
                +
            </div>
            <div className="ct1">
                <p>Startup Supported</p>
            </div>


            <div className="c2">
                {counterOn && <CountUp start={0} end={258} duration={1} delay={0} />}
                +
            </div>
            <div className="ct2">
                <p>Startup Supported</p>
            </div>


            <div className="c3">
                {counterOn && <CountUp start={0} end={758} duration={1} delay={0} />}
                +
            </div>
            <div className="ct3">
                <p>Startup Supported</p>
            </div>


            <div className="c4">
                {counterOn && <CountUp start={0} end={698} duration={1} delay={0} />}
                +
            </div>
            <div className="ct4">
                <p>Startup Supported</p>
            </div>
        </ScrollTrigger>

    )
}
export default CounterUpPage