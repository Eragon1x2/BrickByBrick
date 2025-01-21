import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateMaterials, updateMoney } from '../store/PlayerSlice';
import { RootState } from '../store/store';

type Material = {
    name: string,
    price: number,
    icon: string,
    quantity: number
}

export default function Material({name, price, icon, quantity}: Material) {
    const dispatch = useDispatch();
    const playerMoney = useSelector((state: RootState) => state.player.money);
    const playerMaterials = useSelector((state: RootState) => state.player.materials);

    function buyMaterial() {
        // Check if player has enough money
        if (playerMoney >= price) {
            dispatch(updateMaterials({name: name, amount: quantity}));
            dispatch(updateMoney(-price));
        } else {
            alert('Not enough money to buy this material!');
        }
    }

    const currentQuantity = playerMaterials[name] || 0;

    return (
        <div className='material'>
            <div className='material-icon'>
                <img src={icon} alt={`${name} icon`} />
            </div>
            
            <div className='material-details'>
                <h2>{name}</h2>
                <div className='material-stats'>
                    <div className='material-price'>
                        <span>💰</span>
                        <span>${price}</span>
                    </div>
                    <div className='material-quantity'>
                        <span>📦</span>
                        <span>{quantity} units</span>
                    </div>
                </div>
            </div>
            
            <div className='material-inventory'>
                <span>Your Stock: {currentQuantity}</span>
            </div>
            
            <button 
                onClick={buyMaterial} 
                disabled={playerMoney < price}
                className={playerMoney >= price ? 'buy-button' : 'buy-button disabled'}
            >
                {playerMoney >= price ? 'Buy' : 'Insufficient Funds'}
            </button>
        </div>
    );
}
