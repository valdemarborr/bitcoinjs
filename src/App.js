import './App.css';
import React, { useEffect, useState } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import Table from './components/Table';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1 className='h1'> Bitcoin info </h1>
        <Table />
      </div>
    </QueryClientProvider>
  );
}

export default App;
