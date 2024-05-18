import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('');

    const { setUser } = useContext(UserContext)


    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ setUsername, setPassword })

    }


    return (
        <>
            <h1>User-login
            </h1>
            <input type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='username' />

            <br />

            <input type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='password' />

            <br />
            <button onClick={handleSubmit}>Submit</button>

        </>
    )
}

export default login