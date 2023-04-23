import React,{useEffect} from 'react'
import { useState } from 'react'
import Questions from './Questions'
import { MoveNextQuestion } from '../hooks/FetchTasks'
import { MovePrevQuestion } from '../hooks/FetchTasks'
import { PushAnswer } from '../hooks/setResult'
import { useSelector,useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'

export default function Puzzle() {
    const[check,setChecked]=useState(undefined)
    const trace =useSelector(state=>state.questions.trace)
    const result=useSelector(state=>state.result.result)
    const dispatch=useDispatch()
    useEffect(()=>{
console.log(result);
    })
    function onNext() {
        if(trace<=5){
            console.log('On next click')
            dispatch(MoveNextQuestion())
            if(result.length<=trace){
                dispatch(PushAnswer(check))
            }
        }
       
        setChecked(undefined)
            
    }
    function onPrev() {
        console.log('On prev click')
        if(trace>0)
            dispatch(MovePrevQuestion())
            
    }
    function onChecked(check){
        console.log(check)
        setChecked(check)
    }
    if(result.length && result.length>=5){
        return <Navigate to={'/result'} replace="true"></Navigate>
    }
    return (
        <div className='container'>
            <h1 className='title text-light'>SOLVE TILL YOU REACH END...</h1>
            <Questions onChecked={onChecked}/>

            <div className='grid'>
                {trace>0 ? <button className='btn prev' onClick={onPrev}>Prev</button> : <div></div> }
                
                <button className='btn next' onClick={onNext}>Next</button>
            </div>
        </div>
    )
}


