import React from 'react';
import {CellProps} from '../../types';


const Cell: React.FC<CellProps> = ({ cell, index, onClick }) => {
    return (
        <div
            className={`cell ${cell.clicked ? 'clicked' : ''}`}
            onClick={() => onClick(index)}
        >
            {cell.clicked && cell.hasItem ? '💣' : ''}
        </div>
    );
};

export default Cell;