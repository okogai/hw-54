import React from 'react';

export const Attempts: React.FC<{ attempts: number }> = ({ attempts }) => {
    return <div>Attempts: {attempts}</div>;
};