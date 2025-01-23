import { useEffect, useState } from "react";
import materials from "../db/materials";
import { useDispatch } from "react-redux";
import { updateMaterials } from "../store/PlayerSlice";
import { toast } from "react-toastify";

// Define type for material
interface Material {
    id: number;
    name: string;
    icon: string;
    isFlipped: boolean;
}

// Shuffle array utility
const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
};

export default function MemoryGame() {
    const [cards, setCards] = useState<Material[]>([]);
    const [flippedCards, setFlippedCards] = useState<Material[]>([]);
    const [matchedCards, setMatchedCards] = useState<Material[]>([]);

    const dispatch = useDispatch();

    useEffect(() => {
        // Prepare cards: duplicate, remove water, add unique ids
        const preparedCards = shuffleArray(
            [...materials, ...materials]
                .filter(material => material.name !== 'Water')
                .map(material => ({
                    ...material,
                    id: Math.random(),
                    isFlipped: false
                }))
        );

        setCards(preparedCards);
    }, []);

    useEffect(() => {
        // Check for match when two cards are flipped
        if (flippedCards.length === 2) {
            const [firstCard, secondCard] = flippedCards;
            
            if (firstCard.name === secondCard.name) {
                // Match found
                setMatchedCards(prev => [...prev, firstCard, secondCard]);
                setFlippedCards([]);
            } else {
                // No match, reset after short delay
                const timeoutId = setTimeout(() => {
                    // Unflip non-matching cards
                    setCards(prevCards => prevCards.map(card => 
                        flippedCards.some(flipped => flipped.id === card.id) 
                            ? { ...card, isFlipped: false } 
                            : card
                    ));
                    setFlippedCards([]);
                }, 500);

                return () => clearTimeout(timeoutId);
            }
        }
    }, [flippedCards]);

    useEffect(() => {
        if(matchedCards.length > 0 && matchedCards.length  === cards.length) {
            console.log('you win');
            const material = Math.floor(Math.random() * materials.length);
            toast.success(`You win ${materials[material].name} in ${materials[material].quantity} quantity`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
            dispatch(updateMaterials({name: materials[material].name, amount: materials[material].quantity}));
            

            setFlippedCards([]);
            setMatchedCards([]);
            setCards(shuffleArray(cards));
            setCards(prevCards => prevCards.map(card => 
                card.isFlipped ? { ...card, isFlipped: false } : card
            ));
        }
    },[matchedCards])

    const handleCardClick = (clickedCard: Material) => {
        // Prevent flipping already matched or more than 2 cards
        if (
            matchedCards.some(card => card.id === clickedCard.id) || 
            flippedCards.length >= 2 || 
            flippedCards.some(card => card.id === clickedCard.id)
        ) return;

        // Flip the card
        setCards(prevCards => 
            prevCards.map(card => 
                card.id === clickedCard.id ? { ...card, isFlipped: true } : card
            )
        );

        // Add to flipped cards
        setFlippedCards(prev => [...prev, clickedCard]);
    };

    return (
        <div className="memory-game">
            <h1>Find all the matches</h1>
            <div className="cards">
                {cards.map((card) => (
                    <div 
                        key={card.id} 
                        className={`card ${card.isFlipped ? 'flipped' : ''} ${matchedCards.some(m => m.id === card.id) ? 'matched' : ''}`}
                        onClick={() => handleCardClick(card)}
                    >
                        <img src={card.icon} alt={card.name} />
                    </div>
                ))}
            </div>
        </div>
    );
}