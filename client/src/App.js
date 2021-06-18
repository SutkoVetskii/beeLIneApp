import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter, NavBar } from './components'

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <AppRouter />
        </BrowserRouter>
    )
}

export default App
