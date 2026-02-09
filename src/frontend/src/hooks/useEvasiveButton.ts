import { useState, useRef, useCallback } from 'react';

interface Position {
  x: number;
  y: number;
}

export function useEvasiveButton() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<Position>({ x: 200, y: 100 });

  const getRandomPosition = useCallback(() => {
    if (!containerRef.current) return { x: 200, y: 100 };

    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    
    // Button dimensions (approximate)
    const buttonWidth = 120;
    const buttonHeight = 60;
    
    // Calculate safe bounds (keeping button fully visible)
    const minX = buttonWidth / 2 + 20;
    const maxX = containerRect.width - buttonWidth / 2 - 20;
    const minY = buttonHeight / 2 + 20;
    const maxY = containerRect.height - buttonHeight / 2 - 20;
    
    // Generate random position within safe bounds
    const newX = Math.random() * (maxX - minX) + minX;
    const newY = Math.random() * (maxY - minY) + minY;
    
    return { x: newX, y: newY };
  }, []);

  const handlePointerEnter = useCallback(() => {
    setPosition(getRandomPosition());
  }, [getRandomPosition]);

  const handlePointerDown = useCallback((e: React.PointerEvent | React.TouchEvent) => {
    e.preventDefault();
    setPosition(getRandomPosition());
  }, [getRandomPosition]);

  return {
    position,
    containerRef,
    handlePointerEnter,
    handlePointerDown,
  };
}
