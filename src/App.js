import React from 'react';

import './App.css'
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransationList from './components/TransationList';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';

const App = () => {
    return (
        <GlobalProvider>
            <Header />
            <Balance />
            <IncomeExpenses />
            <TransationList />
            <AddTransaction />
        </GlobalProvider>
    );
}

export default App;