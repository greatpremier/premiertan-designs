
'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type ElementType = 'text' | 'shape' | 'image';

interface ElementProps {
  position: { x: number; y: number };
  width?: number;
  height?: number;
  text?: string;
  fontSize?: number;
  fontWeight?: string;
  color?: string;
  shape?: 'rectangle' | 'circle';
  imageUrl?: string;
}

export interface DesignElement {
  id: string;
  type: ElementType;
  props: ElementProps;
}

interface DesignContextType {
  elements: DesignElement[];
  addElement: (type: ElementType, props: Partial<ElementProps>) => void;
  updateElement: (id: string, newProps: Partial<ElementProps>) => void;
  selectedElement: string | null;
  setSelectedElement: (id: string | null) => void;
}

const DesignContext = createContext<DesignContextType | undefined>(undefined);

export const DesignProvider = ({ children }: { children: ReactNode }) => {
  const [elements, setElements] = useState<DesignElement[]>([]);
  const [selectedElement, setSelectedElement] = useState<string | null>(null);

  const addElement = (type: ElementType, props: Partial<ElementProps>) => {
    const newElement: DesignElement = {
      id: new Date().toISOString(),
      type,
      props: {
        position: { x: 50, y: 50 },
        color: 'hsl(var(--foreground))',
        ...props,
      },
    };
    setElements(prev => [...prev, newElement]);
    setSelectedElement(newElement.id);
  };

  const updateElement = (id: string, newProps: Partial<ElementProps>) => {
    setElements(prev =>
      prev.map(el => (el.id === id ? { ...el, props: { ...el.props, ...newProps } } : el))
    );
  };

  return (
    <DesignContext.Provider value={{ elements, addElement, updateElement, selectedElement, setSelectedElement }}>
      {children}
    </DesignContext.Provider>
  );
};

export const useDesign = () => {
  const context = useContext(DesignContext);
  if (context === undefined) {
    throw new Error('useDesign must be used within a DesignProvider');
  }
  return context;
};
