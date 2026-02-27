import React, { useRef, useEffect, useState } from 'react';

const DrawingPad = () => {
    const canvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [ctx, setCtx] = useState(null);
    const [color, setColor] = useState('black');
    const [size, setSize] = useState(5);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        context.lineCap = 'round';
        setCtx(context);
    }, []);

    const startDrawing = (event) => {
        setIsDrawing(true);
        draw(event);
    };

    const endDrawing = () => {
        setIsDrawing(false);
        ctx.beginPath();
    };

    const draw = (event) => {
        if (!isDrawing) return;
        ctx.strokeStyle = color;
        ctx.lineWidth = size;
        ctx.lineTo(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
    };

    const clearCanvas = () => {
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    };

    const changeTool = (tool) => {
        if (tool === 'eraser') {
            setColor('white');
        } else {
            setColor('black');
        }
    };

    return (
        <div>
            <canvas 
                ref={canvasRef} 
                width={800} 
                height={600} 
                onMouseDown={startDrawing} 
                onMouseUp={endDrawing} 
                onMouseMove={draw} 
                style={{ border: '1px solid black' }}
            />
            <div>
                <button onClick={() => changeTool('pen')}>Pen</button>
                <button onClick={() => changeTool('eraser')}>Eraser</button>
                <button onClick={clearCanvas}>Clear</button>
            </div>
        </div>
    );
};

export default DrawingPad;