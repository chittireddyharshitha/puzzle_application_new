
import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'

import { Link } from 'react-router-dom'
import { setUserId } from '../redux/result_red'
import '../styles/Main.css'

 
   
    


export default function Main() {
    
    const inputRef = useRef(null)
    const dispatch = useDispatch()


    function startQuiz() {
        if (inputRef.current?.value) {
            dispatch(setUserId(inputRef.current?.value))
        }
    }
  
    return (
        
        
            
           <div className='container'>
            <h1 className='title text-light'> Puzzle Application</h1>
            <ol>
                <li>Welcome to the Puzzle Application!</li>
                <li>Lets get your soft skills tested..</li>
                <li>Are you Ready!!</li>
                <li>**Please Enter your Username to Start the Game**</li>
            </ol>
            
            <form id="form">
                <input ref={inputRef} className='userid' type="text" placeholder='Username*' />
            </form>
            <div className='start'>
                {/* link */}
                <Link className='btn' to={'puzzle'} onClick={startQuiz}>START GAME</Link>
            </div>
            </div>
        
    )
}
