import React, { useState } from 'react'
import Counter from './Counter'
import PostsList from './PostsList'
import './app.css'

const App = () => {

    return (
        <main className='app-container'>
            <Counter/>
            <PostsList/>
        </main>
    )
}

export default App