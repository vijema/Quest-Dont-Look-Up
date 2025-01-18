import React, { useState } from 'react';

const DraggableBlock = () => {
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setOffset({
            x: e.clientX - position.left,
            y: e.clientY - position.top,
        });
    };

    const handleMouseMove = (e) => {
        if (isDragging) {
            setPosition({
                top: e.clientY - offset.y,
                left: e.clientX - offset.x,
            });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    return (
        <div
            style={{
                position: 'absolute',
                top: position.top,
                left: position.left,
                width: '200px',
                height: '200px',
                backgroundColor: 'lightblue',
                cursor: 'move',
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp} // Чтобы остановить перетаскивание при выходе мыши
        >
            Перетаскивай меня!
        </div>
    );
};

export default DraggableBlock;