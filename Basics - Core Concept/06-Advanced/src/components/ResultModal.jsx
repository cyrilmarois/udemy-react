import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPoral, createPortal } from 'react-dom';

const ResultModal = forwardRef(function ResultModal(
    { targetTime, remainingTime, onReset },
    ref
) {
    const dialog = useRef();
    const userLost = remainingTime <= 0;
    const formattedRemaingTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

    useImperativeHandle(ref, () => {
        return {
            openDialog() {
                dialog.current.showModal();
            },
        };
    });

    return createPortal(
        <dialog
            ref={dialog}
            className='result-modal'
            onClose={onReset}
        >
            <h2>{userLost ? 'You Lost' : `Your score: ${score}`}</h2>
            <p>
                The target time was <strong>{targetTime}</strong> seconds
            </p>
            <p>
                You stopped the timer with{' '}
                <strong>{formattedRemaingTime} seconds left</strong>
            </p>
            <form
                method='dialog'
                onSubmit={onReset}
            >
                <button>Close</button>
            </form>
        </dialog>,
        document.getElementById('modal')
    );
});

export default ResultModal;