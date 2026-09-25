import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContadorJS from './Pages/App/App.jsx'
import CounterState from './Pages/ContadorState/Counter.jsx';

export default function Rotas() {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<ContadorJS />} />
                    <Route path='/state' element={<CounterState />} />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    )
}