import { useState, useRef } from 'react';
import ResultModal from './ResultModal';

const TimerChallenge = ({ title, targetTime }) => {
    const timer = useRef();
    const dialog = useRef();

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
    const isTimerActive =
        timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        dialog.current.openDialog();
    }

    function handleReset() {
        setTimeRemaining(targetTime * 1000);
    }

    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaining((prevTimeRemaing) => prevTimeRemaing - 10); // according to the call below every 10ms
        }, 10); // call every 10 ms
    }

    function handleStop() {
        dialog.current.openDialog();
        clearInterval(timer.current);
    }

    return (
        <>
            <ResultModal
                ref={dialog}
                targetTime={targetTime}
                remainingTime={timeRemaining}
                onReset={handleReset}
            />
            <section className='challenge'>
                <h2>{title}</h2>
                <p className='challenge-time'>
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    {isTimerActive && (
                        <button onClick={handleStop}>Stop Challenge</button>
                    )}
                    {!isTimerActive && (
                        <button onClick={handleStart}>Start Challenge</button>
                    )}
                </p>
                <p className={isTimerActive ? 'active' : undefined}>
                    {isTimerActive ? 'Time is running...' : 'Timer inactive'}
                </p>
            </section>
        </>
    );
};

export default TimerChallenge;
