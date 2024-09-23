import React from 'react';

export interface ICell {
    hasItem: boolean;
    clicked: boolean;
}

export interface CellProps {
    cell: CellType;
    index: number;
    onClick: (index: number) => void;
}