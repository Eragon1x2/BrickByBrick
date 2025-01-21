
import PlayerComponent from '../components/Player';
import {useEffect, useState} from 'react';
import Modal from '../components/Modal';

export default function HomePage() {
    const [modal, showModal] = useState(true);


    useEffect(() => {
        const player = localStorage.getItem('player');
        if(player) {
            showModal(false);
        }
        else {
            showModal(true);
        }
    },[])
    return (
        <div>
     {modal && <Modal onClose={() => showModal(false)}/>}
     <PlayerComponent/>
        </div>
    )
}