import { useRef, useState, useEffect } from 'react';
import OrderType from '../types/Order';

export default function MiniGame({order}: {order: OrderType}) {
    const [loses, setLoses] = useState(0);
    const [right, setRight] = useState(0);
    const [result, setResult] = useState<string | null>(null);
    const [timeToDone, setTimeToDone] = useState(2);
    const [gameEnded, setGameEnded] = useState(false);

    const brick = useRef<HTMLDivElement>(null);
    const button = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (gameEnded) {
            if (right >= loses) {
                setResult('You win');
            } else if (right < loses) {
                setResult('You lose');
            }
        }
    }, [right, loses, gameEnded]);

    function checkPosition() {
        if (brick.current && button.current) {
            const brickLeft = brick.current.offsetLeft;
            const buttonLeft = button.current.offsetLeft;
            if (Math.abs(brickLeft - buttonLeft) <= 100) {
                setRight(prev => prev + 1);
                brick.current.style.transition = 'none';
                brick.current!.style.left = 'calc(100% - 100px)';
                return;
            }
        }
        return;
    }

    function moveBrick() {
        let time: number =  order.time_to_complete * 60 * 1000;
        let a = setInterval(() => {
            setTimeToDone(time/1000);
            if (time <= 0) {
                clearInterval(a);
                setGameEnded(true);
                return; // Stop further execution
            };
            if (brick.current) {
                const left = brick.current.offsetLeft;
                brick.current.style.transition = 'left 0.1s linear';
                brick.current.style.left = left - 100 + 'px';
                if (left < 0) {
                    setLoses(prev => prev + 1);
                    brick.current.style.transition = 'none';
                    brick.current!.style.left = 'calc(100% - 100px)';
                }
            }
            time -= 1000;
        }, 1000);
    }
    return (
        <div>
            MiniGame
            <div>
                <h1>Right: {right}</h1>
                <h1>Loses: {loses}</h1>
                <h1>Time to done: {timeToDone}</h1>
                <div className='game'>
                    {result && <h1>{result}</h1>}
                    <div className='brick' ref={brick}></div>
                </div>
            </div>
            <button ref={button} className='game-button' onClick={checkPosition} disabled={gameEnded}>Press button</button>
            <button onClick={() => moveBrick()} disabled={gameEnded}>Start game</button>
        </div>
    )
}