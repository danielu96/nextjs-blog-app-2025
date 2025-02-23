
import React, { createContext, useState, useContext, ReactNode } from 'react';

type SortOrder = 'latest' | 'oldest';

interface SortContextProps {
    sortOrder: SortOrder;
    setSortOrder: (order: SortOrder) => void;
}

const SortContext = createContext<SortContextProps | undefined>(undefined);

export const SortProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [sortOrder, setSortOrder] = useState<SortOrder>('latest');

    return (
        <SortContext.Provider value={{ sortOrder, setSortOrder }}>
            {children}
        </SortContext.Provider>
    );
};

export const useSort = () => {
    const context = useContext(SortContext);
    if (!context) {
        throw new Error('useSort must be used within a SortProvider');
    }
    return context;
};