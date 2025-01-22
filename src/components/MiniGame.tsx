import { useRef, useState, useEffect } from 'react';
import OrderType from '../types/Order';
import { useDispatch, useSelector } from 'react-redux';
import PlayerType from '../types/Player';
import { updateMaterials, updateMoney } from '../store/PlayerSlice';
import { toast } from 'react-toastify';

export default function MiniGame({order}: {order: OrderType}) {
    const [loses, setLoses] = useState(0);
    const [right, setRight] = useState(0);
    const [timeToDone, setTimeToDone] = useState(order.time_to_complete * 60);
    const [gameEnded, setGameEnded] = useState(false);

    const brick = useRef<HTMLDivElement>(null);
    const button = useRef<HTMLButtonElement>(null);


    const player = useSelector((state: {player: PlayerType}) => state.player);
    const dispatch = useDispatch();


    const materialsNeededs = order.materials_needed;
    const playerMaterials = player.materials;
    const materialsNeeded = materialsNeededs.find((material) => {
      return material.amount > playerMaterials[material.name];
    });


    useEffect(() => {
        if (gameEnded) {
            if (right >= loses) {
                dispatch(updateMoney(order.payment));
                toast.success('You complete the order', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
               
            } else if (right < loses) {
                toast.error('You failed the order 😭', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
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
                brick.current!.style.left = 'calc(100% - -100px)';
                return;
            }
            console.log(brickLeft, buttonLeft)
        }
        return;
    }

    function moveBrick() {
        if(materialsNeeded && materialsNeeded.amount > playerMaterials[materialsNeeded.name]) {
            toast.error('Not enough materials', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
            return;
          }
        materialsNeededs.forEach((material) => {
            dispatch(updateMaterials({name: material.name, amount: -material.amount}));
          })
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
                    brick.current!.style.left = 'calc(100% - -100px)';
                }
            }
            time -= 1000;
        }, 1000);
    }
    return (
        <div className='game-container'>
            {/* <div className='game-stats'>
                <h1>Right: {right}</h1>
                <h1>Loses: {loses}</h1>
                <h1>Time to done: {timeToDone}s</h1>
            </div> */}
            <div className="game-start">
                <h1>How to Play:</h1>
                <p>Press the button precisely when the brick is directly above the placement area to successfully build. Do this until the timer runs out</p>
                <button className='game-start-button' onClick={() => moveBrick()} disabled={gameEnded}>Start order</button>
            </div>
            <div className='game'>
                <p className='game-info'>Placed: {right}  Missed: {loses}</p>
                <p className='game-timer'>Time to done: {timeToDone}s</p>
                <div className='brick' ref={brick}></div>
                <button ref={button} className='game-button' onClick={checkPosition} disabled={gameEnded}>Place a brick</button>
            </div>
        </div>
    )
}