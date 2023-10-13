import { ReactNode, createContext, useEffect, useState } from 'react';

interface Transaction {
    category: string;
    createdAt: string;
    description: string;
    id: number;
    price: number;
    type: 'income' | 'outcome';
}

interface TransactionContextType {
    transactions: Transaction[];
}

interface TransactionsContextProps {
    children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionsContextProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    async function loadTransactions() {
        const response = await fetch('http://localhost:3333/transactions');
        const data = await response.json();

        setTransactions(data);
    }

    useEffect(() => {
        loadTransactions();
    }, []);

    return (
        <TransactionsContext.Provider value={{ transactions }}>
            {children}
        </TransactionsContext.Provider>
    );
}
