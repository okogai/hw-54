import React, {useState} from 'react';
import './App.css';
import {Attempts} from './components/Attempts/Attempts.tsx';
import {ICell} from './types';
import Cell from './components/cell/Cell.tsx';

const createItems = (): ICell[] => {
    const items: ICell[] = [];

    for (let i = 0; i < 36; i++) {
        items.push({ hasItem: false, clicked: false });
    }

    const randomIndex = Math.floor(Math.random() * 36);
    items[randomIndex].hasItem = true;

    return items;
};

const App: React.FC = () => {
    const [items, setItems] = useState<ICell[]>(createItems());
    const [attempts, setAttempts] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    const handleClick = (index: number) => {
        if (!gameOver) {
            const newItems = [...items];
            newItems[index] = { ...newItems[index], clicked: true };

            setItems(newItems);
            setAttempts(attempts + 1);

            if (newItems[index].hasItem) {
                setGameOver(true);
            }
        }
    };

    return (
        <div>
            <h1 className='heading'>Find the Hidden Ring</h1>
            <Attempts attempts={attempts} />
            <div className="board">
                {items.map((cell, index) => (
                    <Cell key={index} cell={cell} index={index} onClick={handleClick} />
                ))}
            </div>
            {gameOver ? <div>You win!</div> : null}
        </div>
    );
};


export default App;
