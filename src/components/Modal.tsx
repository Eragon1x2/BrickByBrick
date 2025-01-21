import { useState } from 'react';
import {useDispatch} from 'react-redux';
import {updateName} from '../store/PlayerSlice';

export default function Modal({onClose}: {onClose: () => void}) {
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    function setNameforPlayer() {
        dispatch(updateName(name));
        onClose();
    }
    return (
        <div className='modal_wrapper'>
            <div className='modal_content'>
            <h2>Please give a name for your company</h2>
            <form action="" onSubmit={() => setNameforPlayer()}>
            <input onChange={(e) => setName(e.target.value)}/>
            <button type='submit'>Submit</button>
            </form>
            </div>
        </div>
    )
}