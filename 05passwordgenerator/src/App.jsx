import React, { useState, useCallback, useEffect, useRef } from 'react';
import Passwordgenerator from './Passwordgenerator';

function App() {
    // useState Hook 1
    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState("");

    // useRef Hook 4
    const passwordRef = useRef(null)

    // useCallback Hook 2
    const passwordGenerator = useCallback(() => {
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if (numberAllowed) str = "0123456789"
        if (charAllowed) str = "!@#$%^7*-_+=[]{}~`"

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(char)
        }

        setPassword(pass)

    }, [length, numberAllowed, charAllowed, setPassword])

    // copy password
    const copyPasswordToClipboard = useCallback(() => {
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0, 999);
        window.navigator.clipboard.writeText(password)
    }, [password])

    // useEffect hook 3
    useEffect(() => {
        passwordGenerator()
    }, [length, numberAllowed, charAllowed, passwordGenerator])

    return (
        <>
            <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-2 text-orange-500 bg-gray-800 h-36'>

                <h1 className='text-white text-center text-2xl'>Password generator</h1>

                <div className="flex shadow rounded-lg overflow-hidden mb-4 my-3">
                    <input type="text" value={password}
                        className='w-full outline-none py-1 px-3'
                        placeholder='Password'
                        readOnly
                        ref={passwordRef}
                    />
                    <button onClick={copyPasswordToClipboard} className='bg-blue-700 outline-none px-3 py-0.5 shrink-0'>Copy</button>
                </div>

                <div className="flex text-sm gap-x-2">
                    <div className="flex items-center gap-x-1">
                        <input type="range" value={length}
                            min={6} max={100}
                            className='cursor-pointer'
                            onChange={(e) => { setLength(e.target.value) }}
                        />
                        <label htmlFor="range">Length: {length}</label>
                    </div>

                    <div className='flex items-center gap-x-1'>
                        <input type="checkbox" defaultChecked={numberAllowed} id="numbrInput"
                            onChange={() => {
                                setNumberAllowed((prev) => !prev)
                            }} />
                        <label htmlFor="numbrInput">Numbers</label>
                    </div>

                    <div className='flex items-center gap-x-1'>
                        <input type="checkbox" defaultChecked={charAllowed} id="characterInput"
                            onChange={() => {
                                setCharAllowed((prev) => !prev)
                            }}
                        />
                        <label htmlFor="characterInput">Character</label>
                    </div>
                </div>
            </div>
            {/* add component */}
            <Passwordgenerator />
        </>
    )
}

export default App;
