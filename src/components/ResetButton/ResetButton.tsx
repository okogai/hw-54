import React from 'react';

export const ResetButton: React.FC<{ onReset: () => void }> = ({ onReset }) => {
    return <button onClick={onReset}>Reset</button>;
};