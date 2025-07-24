import React from 'react';
import Dashboard from './Dashboard';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

const AppContainer = styled.div`
    background-clor: black;
`;

function App() {
    return (
        <Router>
            <AppContainer>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                </Routes>
            </AppContainer>
        </Router>
    );
}

export default App;
