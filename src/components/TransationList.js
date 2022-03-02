import React,{useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import Transaction from './Transaction';

const TransationList = () => {
    const {transactions} = useContext(GlobalContext);

  return (
    <>
         <h3>History</h3>
      <ul  className="list">
      { 
        transactions.map(transcation => (
            <Transaction key={transcation.id} transaction={transcation} />
         ))
      }
      </ul>

    </>
  );
}

export default TransationList;